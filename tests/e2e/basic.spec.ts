import { test, expect } from '@playwright/test'

test('homepage details', async ({ page }) => {
  await page.goto('/')

  await expect(page).toHaveTitle('Vite + Vue 3 + TypeScript + Tailwind Starter Template')
  await expect(page.locator('h2').first()).toHaveText('Hello World Component')
})
