class HeatMapAnalysis{
    sanity(){
        cy.get('.heatmap-cell-component').should('be.visible')
        return this
    }
}
export default HeatMapAnalysis