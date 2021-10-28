import { mount } from '@cypress/vue'
import HelloWorld from './HelloWorld.vue'

it('Passes msg prop correctly', () => {
  mount(HelloWorld, {
    propsData: {
      msg: 'Hello World',
    },
  })

  cy.get('h2').should('contain.text', 'Hello World')
})
