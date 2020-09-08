describe('one',function()
{
    beforeEach(function(){
        cy.fixture('example').then(function(data){
            this.data = data
        })
    })
   it('valid Test',function()
   {
    cy.login(this.data.validEmail,this.data.validPassword)
    cy.title().should('be.equal','Dashboard / nopCommerce administration')
    
    })
    
   it('invalid Password Test',function()
   {
    cy.login(this.data.validEmail,this.data.invalidPassword)
    cy.title().should('not.be.equal','Dashboard / nopCommerce administration')

   })
  
})