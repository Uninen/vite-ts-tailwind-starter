import * as path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import pkg from './package.json'
import * as volar from '@volar/experimental/compiler'

process.env.VITE_APP_BUILD_EPOCH = new Date().getTime()
process.env.VITE_APP_VERSION = pkg.version

export default defineConfig({
  plugins: [vue(volar.getVuePluginOptionsForVite())],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
