class PageTitleCheck{
    PageTitleTest(expectedTitle){
        cy.wait(40000)
        cy.get('[class=brintell-framework-page-title]').should('have.text',expectedTitle)
        return this
    }
}
export default PageTitleCheck