import { test, expect } from '@playwright/test'

test('homepage should not have scrollbars', async ({ page }) => {
  await page.goto('/')

  const html = await page.$('html')
  if (html) {
    const scrollWidth = Number(await html.getAttribute('scrollWidth'))
    const clientWidth = Number(await html.getAttribute('clientWidth'))
    const scrollBarWidth = scrollWidth - clientWidth

    expect(scrollBarWidth).toBe(0)
  }
})
