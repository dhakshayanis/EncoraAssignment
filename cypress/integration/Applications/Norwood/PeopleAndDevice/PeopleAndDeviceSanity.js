import PeopleAndDeviceObjects from './PeopleAndDeviceObjects'
//import Table from '../Table'
import Dropdown from '../Common/DropDown'
import DropDownObjects from '../Common/DropDownObjects'

class PeopleAndDeviceSanity{
    goToTab(option){
        cy.get('.horizontal-accordion-component-menu-tabs').within(()=>{
            cy.contains(option).click()
        })
        cy.wait(3000)
        return this
    }
    switchTo(component){
        cy.get('.switcher-container-content-child:nth-of-type(1)').within(()=>{
            cy.contains(component).click()
        })
        return this
    }
    isComponentVisible(chartComponent){
        let component = PeopleAndDeviceObjects.chartComponent +'('+PeopleAndDeviceObjects.getID(chartComponent)+')'
        cy.get(component).should('be.visible')
        return this
    }
    titleTest(component){
        return cy.contains(component).should('have.text',component)
    }
    sanity(component){
        const sanity = new PeopleAndDeviceSanity
        if(component==PeopleAndDeviceObjects.schoolsDistrictChartcomponent){
            sanity.goToTab(PeopleAndDeviceObjects.schoolsTab)
        }
        sanity.isComponentVisible(component)
        sanity.titleTest(component)
        return this
    }
    openPeopleAndDeviceDropdown(chartComponent){
        const ddo = new DropDownObjects
        //cy.log(dropdownID)
        let dropdownName = ddo.getDropDownName(chartComponent)
        cy.log(dropdownName)
        let ddNameWithoutSpace = dropdownName.replace(' ','');
        //cy.log(ddNameWithoutSpace)
        let dropdownIDLocator = '[id*=\"undefined-undefined-'+ddNameWithoutSpace+'\"]'
        let component = PeopleAndDeviceObjects.chartComponent +'('+PeopleAndDeviceObjects.getID(chartComponent)+')'
        cy.get(component).within(()=>{
            cy.get(dropdownIDLocator).invoke('attr','id').then(($dropdownID)=>{        
                cy.log($dropdownID)
                let dropdown = '#'+$dropdownID+'  > div > div:nth-child(2)'
                cy.get(dropdown).click({force: true})
                cy.wait(2000)
            })
        })
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
            const sanity = new PeopleAndDeviceSanity
            sanity.sanity(dropdownID)
        }
        return this
    }

}
export default PeopleAndDeviceSanity