import ComponentsList from '../../examples/Cypress Learning/ComponentsList'

describe('Find components in a page',function()
{
it('Navigate to URL',function()
{   //for pinellas
    //cy.visit("https://pinellas-sits-qa.azurewebsites.net/index.html")
    //cy.wait(10000)
    //For remote Learning
    cy.visit("https://demo.remotelearning.innive.io")
    cy.wait(20000)
})
it('List of components in that URL',function()
{
   const com = new ComponentsList
   com.getComponentsList()
})
})