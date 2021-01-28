import * as path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  alias: {
    '@': path.resolve(__dirname, './src'),
  },
})
