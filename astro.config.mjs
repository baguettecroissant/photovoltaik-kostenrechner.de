import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://photovoltaik-kostenrechner.de',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
