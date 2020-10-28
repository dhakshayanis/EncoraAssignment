import StudentLearningObjects from '../StudentLearningObjects'
import studentLearningSanity from '../StudentLearningSanity'

class StudentLearningDrilldownSanity{
    drilldown(tileName){
        cy.visit('https://demo.remotelearning.innive.io/student_learning.html', {
            onBeforeLoad(win) {
                cy.stub(win, 'open')
            }
        })
        const id = new studentLearningSanity
        let compID = '[id=\"'+id.getID(tileName)+'\"]'
        cy.get(compID).scrollIntoView()
        
//Accessing new windows via Cypress is not possible in its current version.

//However, there are many ways this functionality can be tested in Cypress now. You can split up your tests into separate pieces and still have confidence that your application is covered.

//Write a test to check that when performing the action in your app, the window.open event is called by using cy.spy() to listen for a window.open event.
        /*cy.visit('https://demo.remotelearning.innive.io/student_learning_drilldown.html', {
            onBeforeLoad(win) {
                cy.stub(win, 'open')
            }
        })*/
        cy.get(compID).within(()=>{
            //cy.contains('DrillDown').click({force : true})
            cy.get('[viewBox="0 0 24 24"]').click()
        })
// Do the action in your app like cy.get('.open-window-btn').click()
        cy.window().its('open').should('be.called')
        //cy.visit('https://demo.remotelearning.innive.io/student_learning_drilldown.html') 
        return this
    }
}
export default StudentLearningDrilldownSanity