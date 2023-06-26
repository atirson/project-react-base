/* eslint-disable no-unused-vars */
/// <reference types="vite/client" />

declare module Cypress {
  interface Chainable<Subject> {
    /**
     * Custom command to select DOM element by data-cy attribute.
     * @example cy.dataCy('greeting')
     */
    dataCy(value: string): Chainable<Element>
  }
}
