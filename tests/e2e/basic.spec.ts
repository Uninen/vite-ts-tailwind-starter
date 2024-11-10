import { expect, test } from '@playwright/test'

const defaultTitle = 'Vite + Vue + TypeScript + Tailwind Starter Template'

test('homepage details', async ({ page }) => {
  await page.goto('/')

  await expect(page).toHaveTitle(defaultTitle)
  await expect(page.locator('h2').first()).toHaveText('Hello World Component')
})
