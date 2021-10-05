import { startDevServer } from '@cypress/vite-dev-server'

export default function (
  on: Cypress.PluginEvents,
  config: Cypress.PluginConfigOptions
): void | Cypress.ConfigOptions | Promise<Cypress.ConfigOptions> {
  on('dev-server:start', async (options: Cypress.DevServerConfig) =>
    startDevServer({ options })
  )
  return config
}
