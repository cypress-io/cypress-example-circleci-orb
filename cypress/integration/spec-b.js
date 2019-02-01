describe('spec b', () => {
  it('works', () => {
    cy.wrap('foo').should('be.equal', 'foo')
  })
  it('waits a little', () => {
    cy.wait(10000)
      .then(() => {
        throw new Error('fail on purpose!')
      })
  })
})
