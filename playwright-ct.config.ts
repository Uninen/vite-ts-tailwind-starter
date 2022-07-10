import { devices, type PlaywrightTestConfig } from '@playwright/experimental-ct-vue'

import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

const config: PlaywrightTestConfig = {
  testDir: './tests/component',
  use: {
    trace: 'on-first-retry',
    ctViteConfig: {
      plugins: [
        vue(),
        AutoImport({
          imports: [
            'vue',
            'vue-router',
            '@vueuse/head',
            'pinia',
            {
              '@/store': ['useStore'],
            },
          ],
          dts: 'src/auto-imports.d.ts',
          eslintrc: {
            enabled: true,
          },
        }),
        Components({
          dirs: ['src/components'],
          extensions: ['vue'],
        }),
      ],
      resolve: {
        alias: {
          '@': resolve(__dirname, './src'),
        },
      },
    },
  },
  projects: [
    {
      name: 'iPhone 6',
      use: {
        browserName: 'webkit',
        ...devices['iPhone 6'],
      },
    },
    {
      name: 'Macbook 11',
      use: {
        browserName: 'firefox',
        ...devices['Macbook 11'],
      },
    },
    {
      name: 'Desktop',
      use: {
        browserName: 'chromium',
        ...devices['Macbook Pro'],
      },
    },
  ],
}

export default config
