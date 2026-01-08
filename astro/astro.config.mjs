// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://wezzax.com',
  output: 'static',
  vite: {
    define: {
      'import.meta.env.CONTENTFUL_SPACE_ID': JSON.stringify(process.env.CMS_CONTENTFUL_SPACE_ID),
      'import.meta.env.CONTENTFUL_ACCESS_TOKEN': JSON.stringify(process.env.CMS_CONTENTFUL_ACCESS_TOKEN),
    },
  },
});
