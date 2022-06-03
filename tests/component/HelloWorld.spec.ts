import { test, expect } from '@playwright/experimental-ct-vue'
// import HelloWorld from '../../src/components/HelloWorld.vue'
import HelloWorld from '../../src/components/SimpleComponent.vue'
import { createTestingPinia } from '@pinia/testing'

test.use({ viewport: { width: 500, height: 500 }, headless: false })

test('should work', async ({ mount }) => {
  const component = await mount(HelloWorld, {
    props: {
      msg: 'Hello World',
    },

    // createTestingPinia({
    //   createSpy: (args) => {
    //     console.log('spy', args)
    //     return () => {
    //       console.log('spyreturns')
    //     }
    //   },
    // })

    // FIXME: need a way to add a plugin here!
  })
  await expect(component).toContainText('Hello')
})
