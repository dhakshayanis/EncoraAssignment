class drilldownSanity{
    static icon =  '(//*[@class="toolbar-component-menu"]//*[@viewBox="0 0 24 24"])[2]'
    drilldown(){
        cy.visit("https://demo.remotelearning.innive.io")
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from failing the test
            return false
        })
        cy.wait(40000)
        cy.get('[class=external-generic-component-child2]').contains('Remote').click()
        cy.visit('https://demo.remotelearning.innive.io/tracking_at_a_glance.html', {
            onBeforeLoad(win) {
            cy.stub(win, 'open')
            }
        })
        cy.wait(50000)
        cy.xpath(drilldownSanity.icon).click({force: true})
        cy.window().its('open').should('be.called')
        cy.visit('https://demo.remotelearning.innive.io/tracking_drilldown.html')
        cy.wait(50000)
        return this
    }

}export default drilldownSanity