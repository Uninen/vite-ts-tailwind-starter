import { test, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'

import { createTestingPinia } from '@pinia/testing'
import HelloWorld from '../../src/components/HelloWorld.vue'

const wrapper = mount(HelloWorld, {
  props: {
    msg: 'Hello Tests!',
  },
  global: {
    plugins: [
      createTestingPinia({
        createSpy: vi.fn,
      }),
    ],
  },
})

test('mount component', async () => {
  expect(wrapper.text()).toContain('Hello Tests!')
})
