import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8000',
        changeOrigin: true,
        onProxyReq: (proxyReq, req, res) => {
          const { query } = req.url
          if (query) {
            const queryStr = Object.keys(query)
              .map((key) => `${key}=${query[key]}`)
              .join('&')
            proxyReq.path += `?${queryStr}`
          }
        }
      }
    }
  },
  build: {
    outDir: 'dist',
  },
  assetsInclude: ['**/*.yml'],
  plugins: [
    vue(),
    vueJsx()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  optimizeDeps: {
    include: ['@vue/runtime-core', '@vue/reactivity']
  },
  esbuild: {
    jsxFactory: 'h',
    jsxFragment: 'Fragment'
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/styles/variables.scss";`
      }
    }
  }
})
