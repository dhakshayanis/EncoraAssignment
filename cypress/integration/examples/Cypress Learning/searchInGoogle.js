/// <reference types="cypress" />
describe('one',function()
{

   it('verify title of the page',function()
   {
    cy.search('Cypress ')
   })

   it('search Cypress',function()
   {
    cy.search('Selenium ')
   })
  
})