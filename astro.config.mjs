import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  markdown: {
    syntaxHighlight: 'shiki',
  },
  site: 'https://gopikrishna.dev',
  integrations: [mdx(), sitemap(), tailwind()],
});
