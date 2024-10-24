import { expect, test } from '@playwright/test'

test('homepage should not have scrollbars', async ({ page }) => {
  await page.goto('/')

  const html = page.locator('html')
  const scrollWidth = Number(await html.getAttribute('scrollWidth'))
  const clientWidth = Number(await html.getAttribute('clientWidth'))
  const scrollBarWidth = scrollWidth - clientWidth

  expect(scrollBarWidth).toBe(0)
})
