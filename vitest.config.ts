import { fileURLToPath, URL } from 'node:url'
import viteConfig from './vite.config'
import { mergeConfig } from 'vite'
import { version as pkgVersion } from './package.json'
import { defineConfig } from 'vitest/config'

process.env.VITE_APP_VERSION = pkgVersion
if (process.env.NODE_ENV === 'production') {
  process.env.VITE_APP_BUILD_EPOCH = new Date().getTime().toString()
}

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      globals: true,
      environment: 'jsdom',
      include: ['tests/unit/**/*.test.ts', 'src/**/*.spec.ts'],
      root: fileURLToPath(new URL('./', import.meta.url)),
      setupFiles: ['./tests/setup/testglobals.ts'],
      coverage: {
        // exclude: ['__mocks__/*', 'tests/*', '**/*.spec.ts'],
        provider: 'v8',
        reporter: ['text', 'json', 'json-summary'],
        lines: 75,
        branches: 65,
        functions: 0,
        statements: 65,
      },
    },
  })
)
