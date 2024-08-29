import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://arquimedes-website.vercel.app/',
  integrations: [mdx(), sitemap(), tailwind()],
  redirects: {
    "/docs" : "/docs/get-started"
  },
  darkMode: 'class',
});