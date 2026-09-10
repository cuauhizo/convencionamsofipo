import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import generateSitemap from 'vite-ssg-sitemap'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueDevTools()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  ssgOptions: {
    // Esto se ejecuta automáticamente al terminar "vite-ssg build"
    onFinished() {
      generateSitemap({
        hostname: 'https://convencionamsofipo.com/', // Cambia esto por tu dominio
        exclude: ['/404'], // Excluye la ruta de NotFound automáticamente
      })
    },
  },
})
