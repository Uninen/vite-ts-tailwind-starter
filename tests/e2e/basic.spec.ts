import { test, expect } from '@playwright/test'

const defaultTitle = 'Vite + Vue + TypeScript + Tailwind Starter Template'

test('homepage details', async ({ page }) => {
  await page.goto('/')

  await expect(page).toHaveTitle(defaultTitle)
  await expect(page.locator('h2').first()).toHaveText('Hello World Component')
})

test('router from pinia', async ({ page }) => {
  await page.goto('/')
  await page.getByTestId('pinia-anchor').click()
  expect(page.url()).toBe('http://localhost:5173/demo/')
})

test('title changes', async ({ page }) => {
  await page.goto('/demo/')
  await expect(page).toHaveTitle('Demo title')
  await page.goto('/')
  await expect(page).toHaveTitle(defaultTitle)
})
