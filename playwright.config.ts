import { type PlaywrightTestConfig, devices } from '@playwright/experimental-ct-vue'

import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

const config: PlaywrightTestConfig = {
  webServer: {
    command: 'pnpm dev',
    url: 'http://localhost:3000/',
    timeout: 120 * 1000,
    reuseExistingServer: !process.env.CI,
  },
  use: {
    baseURL: 'http://localhost:3000',
    trace: 'on-first-retry',
    ctTemplateDir: 'playwright',
    ctCacheDir: 'playwright/.cache',
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
  testDir: './tests',
  testMatch: '*(e2e|component)/*.*(spec|test).*(ts|js)',
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
