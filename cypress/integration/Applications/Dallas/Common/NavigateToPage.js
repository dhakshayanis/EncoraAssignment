import PageTitleCheck from './PageTitleCheck'
class NavigateToPage{
  goToTrackingAtAGlancePage(){
    cy.clearCookies()
        cy.visit('https://dev-dot-disd-i360-k12-dev.uc.r.appspot.com')//("https://demo.remotelearning.innive.io/")  
        Cypress.on('uncaught:exception', (err, runnable) => {
           
            // returning false here prevents Cypress from failing the test
            return false
          })
          //Login for Edge browser
          // cy.get('[name="Email"]').type('tambalavanan@inniveince.com')//('demouser@inniveinc.com')
          // cy.get('#next').click()
          // cy.get('[type="password"]').type('9486304276')//('Innive@23')
          // cy.get('#submit').click()

          //Login for Electron browser
          // cy.get('[name="identifier"]').type('sselvaraj@inniveinc.com')//('demouser@inniveinc.com')
         // cy.get('#identifierNext').click()
         //cy.wait(10000)
         //cy.get('[type="password"]').type('Sadhasivam@2020')//('Innive@23')
          //cy.get('#passwordNext').click()

          cy.wait(30000)
          cy.get('[class=external-generic-component-child2]').contains('Remote').click()
          //cy.wait(30000)
          return this
        }
    goToPage(page)
    {
        cy.wait(35000)
        cy.get('[class=long_label]').contains(page,{matchCase: false}).click({force : true})
        const titleCheck = new PageTitleCheck
        titleCheck.PageTitleTest(page)
        return this
    }
}
export default NavigateToPage