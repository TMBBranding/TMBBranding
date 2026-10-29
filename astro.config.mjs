import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://tmbbranding.com',
  output: 'static',
  redirects: {
    '/admin': '/admin/index.html',
    '/sveltia': '/sveltia/index.html',
  },
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap(),
  ],
});
