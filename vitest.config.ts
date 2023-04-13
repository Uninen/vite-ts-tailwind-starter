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
      environment: 'happy-dom',
      include: ['tests/unit/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
      root: fileURLToPath(new URL('./', import.meta.url)),
    },
  })
)
