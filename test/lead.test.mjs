import test from 'node:test';
import assert from 'node:assert/strict';
import { createHmac } from 'node:crypto';

import { onRequestGet, onRequestOptions, onRequestPost } from '../functions/api/lead.js';

const SITE = 'photovoltaik-kostenrechner.de';
const EDGE_URL = 'https://nhmvgsrwhjsjnpncpiaj.supabase.co/functions/v1/taptaphome-lead';

function request({
  method = 'POST',
  origin = `https://${SITE}`,
  body = { hello: 'world' },
  contentType = 'application/json',
  contentLength,
} = {}) {
  const headers = {
    origin,
    'user-agent': 'node-test',
    'cf-connecting-ip': '203.0.113.10',
  };
  if (contentType) headers['content-type'] = contentType;
  const raw = typeof body === 'string' ? body : JSON.stringify(body);
  if (contentLength !== undefined) headers['content-length'] = String(contentLength);
  return new Request(`https://${SITE}/api/lead`, {
    method,
    headers,
    body: method === 'POST' ? raw : undefined,
  });
}

function context(options = {}) {
  return {
    env: {
      TAPTAPHOME_GATEWAY_SECRET: 'unit-test-secret',
      TAPTAPHOME_EDGE_URL: EDGE_URL,
    },
    request: request(options),
  };
}

async function withMockFetch(mock, run) {
  const original = globalThis.fetch;
  globalThis.fetch = mock;
  try {
    return await run();
  } finally {
    globalThis.fetch = original;
  }
}

test('GET expose uniquement la version saine du gateway', async () => {
  const response = await onRequestGet(context({ method: 'GET' }));
  const body = await response.json();
  assert.equal(response.status, 200);
  assert.equal(body.ok, true);
  assert.equal(body.site, SITE);
  assert.match(body.version, /^2026-08-12\./);
  assert.equal(JSON.stringify(body).includes('secret'), false);
});

test('OPTIONS autorise uniquement le domaine du site', async () => {
  const allowed = await onRequestOptions(context({ method: 'OPTIONS' }));
  assert.equal(allowed.status, 204);
  assert.equal(allowed.headers.get('access-control-allow-origin'), `https://${SITE}`);

  const refused = await onRequestOptions(context({ method: 'OPTIONS', origin: 'https://evil.example' }));
  assert.equal(refused.status, 403);
  assert.equal(refused.headers.get('access-control-allow-origin'), null);
});

test('une origine étrangère est refusée avant tout appel réseau', async () => {
  let calls = 0;
  await withMockFetch(async () => { calls += 1; throw new Error('network forbidden'); }, async () => {
    const response = await onRequestPost(context({ origin: 'https://evil.example' }));
    assert.equal(response.status, 403);
  });
  assert.equal(calls, 0);
});

test('le type de contenu et la taille sont contrôlés avant le proxy', async () => {
  let calls = 0;
  await withMockFetch(async () => { calls += 1; throw new Error('network forbidden'); }, async () => {
    assert.equal((await onRequestPost(context({ contentType: 'text/plain' }))).status, 415);
    assert.equal((await onRequestPost(context({ contentLength: 65537 }))).status, 413);
    assert.equal((await onRequestPost(context({ body: '{bad json' }))).status, 400);
  });
  assert.equal(calls, 0);
});

test('le gateway fixe le domaine, signe toute l’enveloppe et n’appelle jamais TapTapHome directement', async () => {
  const browserPayload = { domain: 'evil.example', subject_key: 'roofing', firstname: 'Max' };
  let captured;

  await withMockFetch(async (url, init) => {
    captured = { url: String(url), init };
    return new Response(JSON.stringify({ success: true, leads: [{ status: 'qualification' }] }), {
      status: 200,
      headers: { 'content-type': 'application/json' },
    });
  }, async () => {
    const response = await onRequestPost(context({ body: browserPayload }));
    assert.equal(response.status, 200);
    assert.equal((await response.json()).success, true);
  });

  assert.equal(captured.url, EDGE_URL);
  assert.equal(captured.url.includes('daa.net'), false);
  const timestamp = captured.init.headers['X-TTH-Gateway-Timestamp'];
  const signature = captured.init.headers['X-TTH-Gateway-Signature'];
  const envelope = JSON.parse(captured.init.body);
  assert.equal(envelope.source_site, SITE);
  assert.equal(envelope.origin, `https://${SITE}`);
  assert.equal(envelope.ip_address, '203.0.113.10');
  assert.deepEqual(envelope.payload, browserPayload);
  const expected = createHmac('sha256', 'unit-test-secret')
    .update(`${timestamp}.${captured.init.body}`)
    .digest('hex');
  assert.equal(signature, expected);
});

test('une erreur du service central est renvoyée sans détail sensible', async () => {
  await withMockFetch(async () => new Response(JSON.stringify({
    success: false,
    errors: ['Interner Übermittlungsfehler.'],
    internal: 'must not leak',
  }), { status: 502, headers: { 'content-type': 'application/json' } }), async () => {
    const response = await onRequestPost(context());
    const body = await response.json();
    assert.equal(response.status, 502);
    assert.deepEqual(body, { success: false, errors: ['Interner Übermittlungsfehler.'] });
  });
});
