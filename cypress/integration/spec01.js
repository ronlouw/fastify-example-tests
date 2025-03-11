// make sure the IntelliSense works in this JavaScript spec file
/// <reference types="Cypress" />

it('shows some fruit', () => {
  // define baseUrl in cypress.json
  // (if not already set)
  //
  // set the convenient viewport in cypress.json
  // like viewportWidth: 400 and viewportHeight: 300
  // (if not already set)
  //
  // visit the page
  // https://on.cypress.io/visit
  cy.visit('/')
  //
  // get the fruit element by ID
  // https://on.cypress.io/get
  cy.get("#fruit")
  // and confirm it does not have the loading text
  .should('not.contain', 'Loading...')
  // and confirm it has the fruit name which is a word
  .invoke('text')
  // that starts with a capital letter
  // followed by all lowercase letters
  // https://on.cypress.io/should
  .should('match', /^[A-Z][a-z]+$/)
  // alternative: use cy.contains with a regular expression
  // see https://on.cypress.io/contains
  cy.contains('#fruit', /^[A-Z][a-z]+$/)
})
