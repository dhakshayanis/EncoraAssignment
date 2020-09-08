describe('one',function()
{

   it('login to Tracking at a glance page',function()
   {
    cy.clearCookies()
    cy.visit("https://demo.remotelearning.innive.io")
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from failing the test
            return false
          })
    /*cy.get('[id=userNameInput]').type('dhakshayanis@inniveinc.com')
    cy.get('[id=passwordInput]').type('Eashwari2406*')
    cy.get('[id=submitButton]').click()*/
    cy.wait(10000)
    cy.get('[class=external-generic-component-child2]').contains('Remote').click()
    cy.wait(20000)
    cy.get('[class=short_label]').contains('People and').click({force : true})
   })
   it('click on instruction', function()
   {
  

   })
})