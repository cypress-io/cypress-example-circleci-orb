it('works', () => {
  cy.wrap('foo').should('be.equal', 'foo')
})
