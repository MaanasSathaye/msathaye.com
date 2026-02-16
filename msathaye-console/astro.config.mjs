// @ts-check
import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'
import mdx from '@astrojs/mdx'

export default defineConfig({
  site: 'https://msathaye.com',
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [mdx()],
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
    },
  },
})
