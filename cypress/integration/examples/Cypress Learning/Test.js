import StudentLearningObjects from '../DemoApplication/StudentLearning/StudentLearningObjects'
describe('one',function()
{
   it('navigate to Tracking At a Glance',function()
   /*{
    cy.visit("https://demo.remotelearning.innive.io")
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from failing the test
        return false
    })
    cy.wait(20000)
    cy.get('[class=external-generic-component-child2]').contains('Remote').click()
    cy.wait(25000)
    cy.get('[class=brintell-framework-page-title]').should('have.text',"At a Glance")
    cy.get('[class=long_label]').contains("People and Device").click({force : true})
   })*/
   {
        cy.log(StudentLearningObjects.googleClassroomAdoption)
   })
})