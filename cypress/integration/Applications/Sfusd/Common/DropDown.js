
import DropDownObjects from './DropDownObjects'
import PeopleAndDeviceObjects from '../PeopleAndDevice/PeopleAndDeviceObjects'
import PeopleAndDeviceSanity from '../PeopleAndDevice/PeopleAndDeviceSanity'

class Dropdown{
    static dropdownoptionsCount = '[role="menuitem"] >div>div>div'
    openDropDown(dropdownID){
        if(dropdownID==PeopleAndDeviceObjects.deviceDistribution|dropdownID==PeopleAndDeviceObjects.districtEnrollment|dropdownID==PeopleAndDeviceObjects.hotSpotDistribution){
            const open = new PeopleAndDeviceSanity
            open.openPeopleAndDeviceDropdown(dropdownID)
        }
        else{
            const dd = new Dropdown
            dd.commonOpenDropDown(dropdownID)
        }
        return this 
    }
    commonOpenDropDown(dropdownID){
        const ddo = new DropDownObjects
        //cy.log(dropdownID)
        let dropdownName = ddo.getDropDownName(dropdownID)
        cy.log(dropdownName)
        let ddNameWithoutSpace = dropdownName.replace(' ','');
        //cy.log(ddNameWithoutSpace)
        let dropdownIDLocator = '[id*=\"undefined-undefined-'+ddNameWithoutSpace+'\"]'
        cy.get(dropdownIDLocator).invoke('attr','id').then(($dropdownID)=>{        
            cy.log($dropdownID)
            let dropdown = '#'+$dropdownID+'  > div > div:nth-child(2)'
            cy.get(dropdown).click({force: true})
            cy.wait(2000)
        })
        return this
    }
    clickOption(i){
        let dropdownOptionPrefix = 'div:nth-child('+i+')>'
        cy.get(dropdownOptionPrefix+Dropdown.dropdownoptionsCount).click()
        cy.wait(3000)                    
        return this        
    }   
    numberOfDropdownOptionsCheck(dropdownID){
        const dd = new Dropdown
        const ddo = new DropDownObjects
        cy.log(dropdownID)
        dd.openDropDown(dropdownID)
        cy.get(Dropdown.dropdownoptionsCount).then(($dropoptionsCount) => {
            let listcount = $dropoptionsCount.length;
            expect(listcount).to.equal(ddo.getDropDownOptions(dropdownID).length)
        })
        return this
    }
    dropDownOptionsTextCheck(dropdownID){
        const ddo = new DropDownObjects
        const dd = new Dropdown
        let count =ddo.getDropDownOptions(dropdownID).length//DropDownObjects.getDropDownOptions(dropdownName).length;
        for(let i =1; i<=count; i++){
            let dropdownOptionPrefix = 'div:nth-child('+i+')>'
            cy.get(dropdownOptionPrefix+Dropdown.dropdownoptionsCount).should('have.text',ddo.getDropDownOptions(dropdownID)[i-1])
        }
        dd.openDropDown(dropdownID)
        return this
    }
    dropDownSanity(dropdownID){
        const dd = new Dropdown
        //cy.log(dropdownID)
        dd.numberOfDropdownOptionsCheck(dropdownID)
        dd.dropDownOptionsTextCheck(dropdownID)
        return this
    }
}
export default Dropdown