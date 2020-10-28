import Tiles from "./Tiles"

class trackingAtAGlanceDropdown{
    
    schoolDimensionView(){
        const opendd = new  trackingAtAGlanceDropdown
        opendd.openDropDown('SchoolDimension')
        cy.wait(2000)
        opendd.selectDropdown('Grade Level')
        cy.wait(2000)
        const tiles = new Tiles
        tiles.isTilesPresent()
        opendd.openDropDown('SchoolDimension')
        opendd.selectDropdown('School Level')
        tiles.isTilesPresent()
        return this
    }/*
    studentDimensionView(){
        cy.get('[id="undefined-undefined-StudentDimension^"]').contains('Special Group').should(($School) => {
            expect($School).to.have.length(2)
            expect($School.eq(0)).to.contain('Ethnicity')
            expect($School.eq(1)).to.contain('Gender')
            expect($School.eq(2)).to.contain('Special Group')
            expect($School.eq(1)).to.contain('Student Device Breakdown')
        return this
    }*/

    openDropDown(dropdown){
        let dropdownID='undefined-undefined-'+dropdown
        let dropdownLocator = '[id*=\"'+dropdownID+'\"]'
        cy.log(dropdownID)
        cy.log(dropdownLocator)
        cy.get(dropdownLocator).within(()=>{
            cy.get('[style*="color: rgba(0, 0, 0, 0.87); height: 56px; line-height: 56px; overflow: hidden; opacity: 1; position: relative; padding-left: 0px; padding-right: 56px; text-overflow: ellipsis; top: 6px; white-space: nowrap;"]')
            .click({force:true})})
        return this
    }

    selectDropdown(option){
        cy.get('[role="menuitem"]').contains(option).click
    }
}
export default trackingAtAGlanceDropdown