class PageTitleCheck{
    PageTitleTest(expectedTitle){
        cy.wait(30000)
        cy.get('[class=brintell-framework-page-title]').should('have.text',expectedTitle)
        return this
    }
}
export default PageTitleCheck