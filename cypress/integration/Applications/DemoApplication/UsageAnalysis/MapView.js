class MapView{
    sanity(){
        cy.wait(3000)
        cy.get('.esriMapLayers').should('be.visible')
        return this
    }
}
export default MapView