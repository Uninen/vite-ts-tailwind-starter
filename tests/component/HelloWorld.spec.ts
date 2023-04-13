import { test, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Component from '@/components/HelloWorld.vue'

test('HelloWorld', async () => {
  expect(Component).toBeTruthy()

  const wrapper = mount(Component, {
    props: {
      msg: 'Hello World',
    },
  })
  expect(wrapper.text()).toContain('Hello World')
})
