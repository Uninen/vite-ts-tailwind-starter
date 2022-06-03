import { test, expect } from '@playwright/experimental-ct-vue'
import HelloWorld from '../../src/components/HelloWorld.vue'

test('should work', async ({ page, mount }) => {
  await mount(HelloWorld, {
    props: {
      msg: 'Hello World',
    },
  })
  // Can't use component selector here because HelloWorld is a gragment
  // (is multiple elements). So we are starting from page.
  await expect(page.locator('h2')).toContainText('Hello World')
})
