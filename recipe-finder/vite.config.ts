import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
import tailwindcss from '@tailwindcss/vite'
import path from "path"

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'PocketChef',
        short_name: 'PocketChef',
        description: 'Recipe Finder App',
        theme_color: '#F6B100',
        background_color: '#F6B100',
        display: 'standalone',
        start_url: '/',
        icons: [
          {
            src: '/src/images/pocket-chef-logo-round.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/src/images/pocket-chef-logo-round.png',
            sizes: '512x512',
            type: 'image/png',
          }
        ]
      }
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  publicDir: 'public'
})
