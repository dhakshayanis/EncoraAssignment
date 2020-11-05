import Dropdown from '../Common/DropDown'
import DropDownObjects from '../Common/DropDownObjects'

class TimeSeries{
    static timeSeriesChartDropDownID = 'UA_TimeSeriesDropDown'
    static timeSeriesDropDownName = 'District Aggregate'
    static timeSeriesDropDownOptions = ['District Aggregate','Division','Ethnicity','Gender','Grade','School Level','Special Group','Student Device Assignment','Student Hotspot Assignment']

    sanity(){
        cy.get('#chartdiv').should('be.visible')
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
            const sanity = new TimeSeries
            sanity.sanity()
        }
        return this
    }
}
export default TimeSeries