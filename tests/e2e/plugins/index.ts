import { resolve } from 'path'
import { startDevServer } from '@cypress/vite-dev-server'

export default function (
  on: Cypress.PluginEvents,
  config: Cypress.PluginConfigOptions
): void | Cypress.ConfigOptions | Promise<Cypress.ConfigOptions> {
  on('dev-server:start', async (options: Cypress.DevServerConfig) => {
    return startDevServer({
      options,
      viteConfig: {
        configFile: resolve(__dirname, '..', '..', '..', 'vite.config.ts'),
      },
    })
  })
  return config
}
