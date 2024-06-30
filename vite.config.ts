import path from 'node:path'
import { defineConfig } from 'vite'
import { vitePlugins } from './build/vitePlugins'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: vitePlugins(),
  envDir: 'env',
  resolve: {
    alias: {
      '@': `${path.resolve(__dirname)}/src`,
    },
  },
  build: {
    target: 'es6',
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/styles/variable.scss";@import "nutui-uniapp/styles/variables.scss";`,
      },
    },
  },
})
