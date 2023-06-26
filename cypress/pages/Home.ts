export const homeHeader = () => {
  return {
    header: () => cy.get('h1'),
    searchInput: () => cy.get('input'),
  }
}

export const homeFooter = () => {
  return {
    footer: () => cy.get('footer'),
  }
}
