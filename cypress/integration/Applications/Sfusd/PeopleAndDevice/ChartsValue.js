import writeJSON from '../WriteJSON'
import PeopleAndDeviceObjects from './PeopleAndDeviceObjects'
import Dropdown from '../DropDown'
import DropDownObjects from '../DropDownObjects'

class CheckChartsValue{
    /*writeValues(){
        const write = new writeJSON
        const writeChartValues = new CheckChartsValue
        write.start('PeopleAndDeviceChart')
        cy.xpath(PeopleAndDeviceObjects.getTotalXpath(PeopleAndDeviceObjects.districtEnrollment)).invoke('text').then(value=>{
            write.writeValuesInJSON('PeopleAndDeviceChart',PeopleAndDeviceObjects.districtEnrollment+'Total',value)
        })
        cy.xpath(PeopleAndDeviceObjects.getTotalXpath(PeopleAndDeviceObjects.deviceDistribution)).invoke('text').then(value=>{
            write.writeValuesInJSON('PeopleAndDeviceChart',PeopleAndDeviceObjects.deviceDistribution+'Total',value)
        })

        writeChartValues.writeValuesInchart(PeopleAndDeviceObjects.districtEnrollment)
        writeChartValues.writeValuesInchart(PeopleAndDeviceObjects.deviceDistribution)
        write.end('PeopleAndDeviceChart')
        return this
    }*/
    writeValuesInchart(dropdownID){
        const write = new writeJSON
        const dd = new Dropdown
        const ddo = new DropDownObjects
        cy.xpath(PeopleAndDeviceObjects.getTotalXpath(dropdownID)).invoke('text').then(value=>{
            write.writeValuesInJSON('SfusdPeopleAndDeviceChart',dropdownID+'Total',value)
        })
        let noOfOptions = ddo.getDropDownOptions(dropdownID).length;//dd.getNumberOfDropdownOptions(dropdownName)
        cy.log(noOfOptions)
        for(let option=1; option<= noOfOptions; option++){
            cy.log('In loop dd:'+option)
            dd.openDropDown(dropdownID)
            dd.clickOption(option)
            cy.wait(2000)
            cy.writeFile('./cypress/fixtures/SfusdPeopleAndDeviceChart.json','\n'+'"Chart'+dropdownID+'dropdown'+option+'": [', { flag: 'a+' })
            cy.xpath(PeopleAndDeviceObjects.getValueXpath(dropdownID)).its('length').then(valuesCount=>{
                cy.log(valuesCount)

            for(let val=1; val<= valuesCount; val++){
                cy.xpath(PeopleAndDeviceObjects.getValueXpath(dropdownID)+'['+val+']').invoke('text').then(value=>{
                    cy.log(value)
                    let valueApp = value.replace(',','')
                    // let valueApp = value+' '
                    cy.writeFile('./cypress/fixtures/SfusdPeopleAndDeviceChart.json',valueApp, { flag: 'a+' })
                    if(val < valuesCount){
                        cy.writeFile('./cypress/fixtures/SfusdPeopleAndDeviceChart.json',',', { flag: 'a+' })
                    }
                })
            }
            })
            cy.writeFile('./cypress/fixtures/SfusdPeopleAndDeviceChart.json','],', { flag: 'a+' })
        }
        return this
    }
    checkChartTotal(dropdownID){
        const ddo = new DropDownObjects
        cy.readFile('./cypress/fixtures/SfusdPeopleAndDeviceChart.json').then((value) => {
            //expect(user.name).to.equal('Eliza') // true
            let indexName = dropdownID+'Total'
            let totalActual = parseInt((value[indexName]).replace(',',''));
            let noOfOptions = ddo.getDropDownOptions(dropdownID).length;
           // cy.readFile('testdata.json').then((user) => {
            for(let option=1; option<noOfOptions; option++){
                let sum = 0;
                let dataKey = 'Chart'+dropdownID+'dropdown'+option
                cy.log("dropdown number : "+option)
                for(let i=0; i<(value[dataKey].length); i++){
                    sum = value[dataKey][i]+sum
                }
                cy.log("sum of chart members : "+sum)
                expect(totalActual).to.equal(sum)
            }
        })
        return this
    }

}
export default CheckChartsValue