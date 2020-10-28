import EOPopUpObjects from './PopUpObjects'
import Dropdown from '../DropDown'
import DropDownObjects from '../DropDownObjects'

class PopUp{
    openTile(tileName){
        cy.contains(tileName).click()
        cy.wait(5000)
        cy.get('#__AmCharts_React_1__').should('be.visible')
        return this
    }
    sanity(option){
        const tab = new PopUp
        tab.clickTab(option)
        cy.wait(2000)
        tab.isComponentLoaded(option)
        return this
    }
    clickTab(option){
        if(option==EOPopUpObjects.MeetingDuration){
            cy.get('.slider-control-centerright > svg').click()
        }
        var hyphen = option.toLowerCase().replace(/ /g, "-").concat("-tab");
        let path = '#'+hyphen+' > div'
        cy.get(path).click()
        return this
    }
    isComponentLoaded(option){
        if(option==EOPopUpObjects.StudentDimension){
            cy.get('[data-zr-dom-id="zr_0"]').should('be.visible')
        }
        else{
            cy.get('[id*="__AmCharts_React_"]').should('be.visible')
        }
        return this
    }
    verifyComponentSanityOnChangingDropdown(dropdownID){
        const dd = new Dropdown
        const ddo = new DropDownObjects
        let noOfOptions = ddo.getDropDownOptions(dropdownID).length;//dd.getNumberOfDropdownOptions(dropdownName)
        cy.log(noOfOptions)
        for(let i=1; i<= noOfOptions; i++){
            cy.log('In loop i:'+i)
            dd.openDropDown(dropdownID)
            dd.clickOption(i)
            const sanity = new PopUp
            sanity.isComponentLoaded(EOPopUpObjects.StudentDimension)
        }
        return this
    }
}
export default PopUp