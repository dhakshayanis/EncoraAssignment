class PageTitleCheck{
    static pageTitle = '[class=brintell-framework-page-title]' 
    PageTitleTest(expectedTitle){
        cy.wait(30000)
        cy.get(PageTitleCheck.pageTitle).should('have.text',expectedTitle)
        return this
    }
}
export default PageTitleCheck