import PageTitleCheck from '../Common/PageTitleCheck'
class NavigateToPage{
  goToTrackingAtAGlancePage(){
        cy.visit("https://dev-dot-sfps-i360-k12-dev.uc.r.appspot.com")
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from failing the test
            return false
          })
         // cy.get('[name="identifier"]').type('sselvaraj@inniveinc.com')//('demouser@inniveinc.com')
         // cy.get('#identifierNext').click()
         //cy.wait(10000)
         //cy.get('[type="password"]').type('Sadhasivam@2020')//('Innive@23')
          //cy.get('#passwordNext').click()
          cy.wait(10000)
          cy.wait(20000)
          cy.get('[class=external-generic-component-child2]').contains('Remote').click()
          //cy.wait(30000)
          return this
        }
    goToPage(page)
    {
        cy.wait(30000)
        cy.get('[class=long_label]').contains(page,{matchCase: false}).click({force : true})
        const titleCheck = new PageTitleCheck
        titleCheck.PageTitleTest(page)
        return this
    }
}
export default NavigateToPage