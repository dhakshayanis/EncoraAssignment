class ToSchoolDrilldownPopup{
    popupSanity(){
        const popup = new ToSchoolDrilldownPopup
        popup.openPopup(1)
        cy.get('tbody.ant-table-tbody').should('be.visible')
        cy.get('.ant-select-selection-selected-value').should('have.text','Show 10')

        return this
    }
    openPopup(i){
        
        let rowLocator = '.ant-table-tbody>tr:nth-child('+i+')>td:nth-child(2)'
        cy.get(rowLocator).click()
        cy.wait(10000)/*
        cy.get('a').then(($a) => 
        {
            var url = $a[0].getAttribute('href')
            //cy.log(url)
            //cy.get('@windowOpen').should('be.calledWith', url)

        })*/
        cy.window().then((win) => {
            cy.stub(win, 'open').as('windowOpen')
        })
        cy.get('@windowOpen').should('be.calledWith', 'school_drilldown.html')
        return this
    }
}
export default ToSchoolDrilldownPopup