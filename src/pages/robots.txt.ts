import type { APIRoute } from 'astro';
import { siteConfig } from '../../site.config';

export const GET: APIRoute = () => {
  const robots = `User-agent: *
Allow: /
Sitemap: https://${siteConfig.domain}/sitemap-index.xml
`;
  return new Response(robots, {
    headers: { 'Content-Type': 'text/plain' },
  });
};
