class DimensionView{
    sanity(){
        cy.get('[class=vz-background]').should('be.visible')
        return this
    }
}
export default DimensionView