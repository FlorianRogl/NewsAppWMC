// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import createSitemapPlugin from 'vite-plugin-sitemap'

export default defineConfig({
  plugins: [
    react(),
    createSitemapPlugin({
      hostname: 'https://www.promax.at',
      dynamicRoutes: [
        '/',
        '/Unternehmen',
        '/Leistungen',
        '/Branchen',
        '/Karriere',
        '/Kontakt'
      ]
    })
  ],
})