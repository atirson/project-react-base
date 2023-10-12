import { Then, When } from '@badeball/cypress-cucumber-preprocessor'

When('I visit duckduckgo.com', () => {
  cy.visit('https://duckduckgo.com/')
})

Then('I should see a search bar', () => {
  cy.get('input').should(
    'have.attr',
    'placeholder',
    'Search the web without being tracked',
  )

  // Example of using the page object
  // homeHeader().searchInput().should('be.visible')

  // Example of using the interceptors
  // interceptGetUser()

  assert.deepEqual({}, {})
})