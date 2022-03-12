import { mount } from '@cypress/vue'
import { createTestingPinia } from '@pinia/testing'

import HelloWorld from '../../src/components/HelloWorld.vue'

describe('Basic demo', () => {
  before(() => {
    setTimeout(() => {
      console.log('waiting for CI to catch up')
    }, 2000)
  })

  it('Passes msg prop correctly', () => {
    mount(HelloWorld, {
      propsData: {
        msg: 'Hello World',
      },
      global: {
        plugins: [
          createTestingPinia({
            createSpy: (args) => {
              console.log('spy', args)
              return () => {
                console.log('spyreturns')
              }
            },
          }),
        ],
      },
    })

    cy.get('h2').should('contain.text', 'Hello World')
  })
})
