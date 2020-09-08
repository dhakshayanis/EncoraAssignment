describe('one',function()
{

   it('valid Test',function()
   {
    cy.login('admin@yourstore.com','admin')
    cy.title().should('be.equal','Dashboard / nopCommerce administration')
   })

   it('invalid Test',function()
   {
    cy.login('admin@yourstore.com','admin12')
    cy.title().should('not.be.equal','Dashboard / nopCommerce administration')

   })
  
})