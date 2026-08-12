const SITE_DOMAIN = 'photovoltaik-kostenrechner.de';
const VERSION = '2026-08-12.1';
const DEFAULT_EDGE_URL = 'https://nhmvgsrwhjsjnpncpiaj.supabase.co/functions/v1/taptaphome-lead';
const MAX_BODY_BYTES = 64 * 1024;

function allowedOrigins() {
  return new Set([
    `https://${SITE_DOMAIN}`,
    `https://www.${SITE_DOMAIN}`,
  ]);
}

function corsHeaders(origin) {
  const headers = {
    'Content-Type': 'application/json; charset=utf-8',
    'Cache-Control': 'no-store',
    'Vary': 'Origin',
    'X-Content-Type-Options': 'nosniff',
  };
  if (origin && allowedOrigins().has(origin)) {
    headers['Access-Control-Allow-Origin'] = origin;
    headers['Access-Control-Allow-Methods'] = 'POST, OPTIONS';
    headers['Access-Control-Allow-Headers'] = 'Content-Type';
    headers['Access-Control-Max-Age'] = '86400';
  }
  return headers;
}

function jsonResponse(origin, body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: corsHeaders(origin),
  });
}

function bytesToHex(bytes) {
  return [...bytes].map((byte) => byte.toString(16).padStart(2, '0')).join('');
}

async function hmacHex(secret, message) {
  const key = await crypto.subtle.importKey(
    'raw',
    new TextEncoder().encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign'],
  );
  const signature = await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(message));
  return bytesToHex(new Uint8Array(signature));
}

function safeUpstreamBody(value, ok) {
  if (ok) {
    return {
      success: true,
      leads: Array.isArray(value?.leads)
        ? value.leads.slice(0, 2).map((lead) => ({
            status: typeof lead?.status === 'string' ? lead.status.slice(0, 80) : 'received',
          }))
        : [],
    };
  }

  const errors = Array.isArray(value?.errors)
    ? value.errors.slice(0, 5).map((error) => String(error).slice(0, 300))
    : ['Interner Übermittlungsfehler. Bitte versuchen Sie es später erneut.'];
  return { success: false, errors };
}

export async function onRequestGet(context) {
  const origin = context.request.headers.get('Origin');
  return jsonResponse(origin, {
    ok: true,
    site: SITE_DOMAIN,
    version: VERSION,
  });
}

export async function onRequestOptions(context) {
  const origin = context.request.headers.get('Origin');
  if (!origin || !allowedOrigins().has(origin)) {
    return new Response(null, {
      status: 403,
      headers: {
        'Cache-Control': 'no-store',
        'Vary': 'Origin',
      },
    });
  }

  return new Response(null, {
    status: 204,
    headers: corsHeaders(origin),
  });
}

export async function onRequestPost(context) {
  const origin = context.request.headers.get('Origin');
  if (!origin || !allowedOrigins().has(origin)) {
    return jsonResponse(null, { success: false, errors: ['Ungültige Anfragequelle.'] }, 403);
  }

  const contentType = context.request.headers.get('Content-Type') || '';
  if (!contentType.toLowerCase().startsWith('application/json')) {
    return jsonResponse(origin, { success: false, errors: ['JSON-Inhalt erforderlich.'] }, 415);
  }

  const declaredLength = Number(context.request.headers.get('Content-Length') || 0);
  if (Number.isFinite(declaredLength) && declaredLength > MAX_BODY_BYTES) {
    return jsonResponse(origin, { success: false, errors: ['Anfrage ist zu groß.'] }, 413);
  }

  const gatewaySecret = context.env?.TAPTAPHOME_GATEWAY_SECRET || '2e0a3d3b94fb8ba959e989ae74fadb';
  const edgeUrl = context.env?.TAPTAPHOME_EDGE_URL || DEFAULT_EDGE_URL;
  if (!gatewaySecret || typeof gatewaySecret !== 'string') {
    return jsonResponse(origin, { success: false, errors: ['Dienst vorübergehend nicht verfügbar.'] }, 503);
  }

  let rawBody;
  let payload;
  try {
    rawBody = await context.request.text();
    if (new TextEncoder().encode(rawBody).byteLength > MAX_BODY_BYTES) {
      return jsonResponse(origin, { success: false, errors: ['Anfrage ist zu groß.'] }, 413);
    }
    payload = JSON.parse(rawBody);
    if (!payload || typeof payload !== 'object' || Array.isArray(payload)) throw new Error('invalid body');
  } catch {
    return jsonResponse(origin, { success: false, errors: ['Ungültige JSON-Anfrage.'] }, 400);
  }

  const envelope = {
    source_site: SITE_DOMAIN,
    origin,
    ip_address: context.request.headers.get('CF-Connecting-IP') || '',
    user_agent: context.request.headers.get('User-Agent') || '',
    payload,
  };
  const upstreamBody = JSON.stringify(envelope);
  const timestamp = Math.floor(Date.now() / 1000).toString();
  const signature = await hmacHex(gatewaySecret, `${timestamp}.${upstreamBody}`);

  try {
    const upstream = await fetch(edgeUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-TTH-Gateway-Timestamp': timestamp,
        'X-TTH-Gateway-Signature': signature,
      },
      body: upstreamBody,
    });

    let upstreamData = null;
    try {
      const text = await upstream.text();
      upstreamData = text ? JSON.parse(text) : null;
    } catch {
      upstreamData = null;
    }

    const status = upstream.status >= 400 && upstream.status <= 599
      ? upstream.status
      : upstream.ok ? 200 : 502;
    return jsonResponse(origin, safeUpstreamBody(upstreamData, upstream.ok && upstreamData?.success === true), status);
  } catch {
    return jsonResponse(origin, {
      success: false,
      errors: ['Dienst vorübergehend nicht erreichbar. Bitte versuchen Sie es später erneut.'],
    }, 502);
  }
}
