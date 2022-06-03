// https://docs.cypress.io/api/introduction/api.html

describe('Homepage', () => {
  it('Shows correct text', () => {
    cy.visit('/')

    cy.contains('h2', 'Hello World Component')
  })

  it('Should not have vertical scroll bars on mobile or desktop', () => {
    cy.viewport('iphone-5')
    cy.window().then(() => {
      const htmlScrollWidth = Cypress.$('html')[0].scrollWidth
      const htmlWidth = Cypress.$('html')[0].clientWidth
      const scrollBarWidth = htmlScrollWidth - htmlWidth
      expect(scrollBarWidth).to.be.eq(0)
    })

    cy.viewport('macbook-11')
    cy.window().then(() => {
      const htmlScrollWidth = Cypress.$('html')[0].scrollWidth
      const htmlWidth = Cypress.$('html')[0].clientWidth
      const scrollBarWidth = htmlScrollWidth - htmlWidth
      expect(scrollBarWidth).to.be.eq(0)
    })
  })
})
