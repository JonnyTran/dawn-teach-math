import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  assetsInclude: ['**/*.yml'],
  // build: {
  //   outDir: 'dist',
  // },
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
