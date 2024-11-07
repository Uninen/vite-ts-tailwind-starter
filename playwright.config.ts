import { defineConfig, devices } from '@playwright/test'

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './tests/e2e',
  timeout: 30 * 1000,
  expect: {
    /**
     * Maximum time expect() should wait for the condition to be met.
     * For example in `await expect(locator).toHaveText();`
     */
    timeout: 5000,
  },
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  use: {
    actionTimeout: 0,
    baseURL: 'http://localhost:5173',
    trace: 'on-first-retry',
    // headless: !!process.env.CI,
  },
  webServer: {
    command: process.env.CI ? 'vite preview --port 5173' : 'vite dev',
    port: 5173,
    reuseExistingServer: !process.env.CI,
  },
  projects: [
    {
      name: 'iPhone SE',
      use: {
        browserName: 'webkit',
        ...devices['iPhone SE'],
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
})
