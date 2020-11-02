class SchoolView{
    sanity(){
        cy.get('[class="wrap-component"]').should('be.visible')
        return this
    }
}
export default SchoolView
