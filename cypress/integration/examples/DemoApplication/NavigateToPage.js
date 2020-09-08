import PageTitleCheck from '../DemoApplication/PageTitleCheck'
class NavigateToPage{
  goToTrackingAtAGlancePage(){
        cy.visit("https://demo.remotelearning.innive.io")
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from failing the test
            return false
          })
          cy.get('[name="Email"]').type('demouser@inniveinc.com')
          cy.get('#next').click()
          cy.get('[type="password"]').type('Innive@23')
          cy.get('#submit').click()/*
          cy.request('POST','https://accounts.google.com').then($res=> {
            $res.redirect('https://demo.remotelearning.innive.io/welcome.html') 
          })
          cy.request('POST', 'https://demo.remotelearning.innive.io/tracking_at_a_glance.html/user')
  .then((response) => {
    // pull out the location redirect
    const loc = response.headers['access_token']

    // parse out the token from the url (assuming its in there)
    const token = loc

    // do something with the token that your web application expects
    // likely the same behavior as what your SSO does under the hood
    // assuming it handles query string tokens like this
    //cy.visit('https://demo.remotelearning.innive.io/tracking_at_a_glance.html/user?token=' +'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQwODc5YWYwLWVkYWYtMTFlYS04MTJkLTk1YWNkMzUyMWJiYyIsImVtYWlsIjoiZGVtb3VzZXJAaW5uaXZlaW5jLmNvbSIsInVzZXJuYW1lIjoiZGVtb3VzZXJAaW5uaXZlaW5jLmNvbSIsImRpc3BsYXluYW1lIjoiRGVtbyBVc2VyIiwiYXV0aHR5cGUiOiJHb29nbGUiLCJpYXQiOjE1OTkxMTQ3NTQsImV4cCI6MTU5OTIwMTE1NH0.CIVrF7qfoxvF76x450I-ztz0d8qrw6UKpQ0j1eYVmUA; connect.sid=s%3A3kuWWl2j_tM5JtJtljw_eL-WPs-lVCSm.yB371LAqrmgcNjtIe8rh7dO0RtNnryER4ZinIX2Nm4A')

    // if you don't need to work with the token you can sometimes
    // visit the location header directly
    //cy.visit(loc)
  })
          cy.wait(10000)
          cy.wait(20000)
          cy.get('[class=external-generic-component-child2]').contains('Remote').click()
        /*
          app.post('/submit', (req, res) => {
            // redirect the browser to google.com
            res.redirect('https://demo.remotelearning.innive.io/welcome.html')//'https://google.com')
          })*/
          //app.post('/submit', (req, res) => {
            // redirect the browser to google.com
           // res.redirect("https://demo.remotelearning.innive.io/welcome.html")
           //window.location.href = 'https://demo.remotelearning.innive.io/welcome.html'
          //})*/
          return this
        }/*
        static parseOutMyToken(){
          cy.visit("https://demo.remotelearning.innive.io")
          cy.get('[name="Email"]').type('demouser@inniveinc.com')
          cy.get('#next').click()
          cy.get('[type="password"]').type('Innive@23')
          cy.get('#submit').click()
        }
        trial(){
        cy.request('POST', 'https://demo.remotelearning.innive.io/welcome.html', { username: 'demouser@inniveinc.com', password: 'Innive@23' })
  .then((response) => {
    // pull out the location redirect
    const loc = response.headers['Location']

    // parse out the token from the url (assuming its in there)
    const token = NavigateToPage.parseOutMyToken(loc)

    // do something with the token that your web application expects
    // likely the same behavior as what your SSO does under the hood
    // assuming it handles query string tokens like this
    cy.visit('https://demo.remotelearning.innive.io/welcome.html?token=' + token)

    // if you don't need to work with the token you can sometimes
    // visit the location header directly
    cy.visit(loc)
  })
}*/
      /*  goToTrackingAtAGlancePage(){
          cy.visit("https://demo.remotelearning.innive.io")
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from failing the test
            return false
          })
          cy.get('[name="Email"]').type('demouser@inniveinc.com')
          cy.get('#next').click()
          cy.get('[type="password"]').type('Innive@23')
          cy.get('#submit').click()
          //cy.visit("https://demo.remotelearning.innive.io/welcome.html")
          cy.wait(10000)
        cy.wait(20000)
        cy.get('[class=external-generic-component-child2]').contains('Remote').click()
        return this
    }*/
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