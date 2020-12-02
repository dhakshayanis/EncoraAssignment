import PageTitleCheck from '../Common/PageTitleCheck'
class NavigateToPage{
  static url = 'https://nps.remotelearning.innive.io/'
  goToTrackingAtAGlancePage(){
        cy.visit(NavigateToPage.url)
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from failing the test
            return false
          })/*
          cy.get('[name="Email"]').type('dhakshayanis@inniveinc.com')//('demouser@inniveinc.com')
          cy.get('#next').click()
          cy.get('[type="password"]').type('Eashwari')//('Innive@23')
          cy.get('#submit').click()*/
          
          cy.wait(30000)
          cy.get('[class=external-generic-component-child2]').contains('Remote').click()
          //cy.wait(30000)
          return this
        }
    goToPage(page)
    {
        cy.wait(45000)
        cy.get('[class=long_label]').contains(page,{matchCase: false}).click({force : true})
        const titleCheck = new PageTitleCheck
        titleCheck.PageTitleTest(page)
        return this
    }
}
export default NavigateToPage