import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://tmbbranding.com',
  output: 'static',
  vite: {
    plugins: [
      {
        name: 'serve-static-index',
        configureServer(server) {
          server.middlewares.use((req, res, next) => {
            if (req.url === '/admin' || req.url === '/admin/') {
              req.url = '/admin/index.html';
            }
            if (req.url === '/sveltia' || req.url === '/sveltia/') {
              req.url = '/admin/index.html';
            }
            next();
          });
        },
      },
    ],
  },
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap(),
  ],
});
