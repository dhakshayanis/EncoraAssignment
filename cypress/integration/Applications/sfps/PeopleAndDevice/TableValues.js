import PeopleAndDeviceSanity from './PeopleAndDeviceSanity'
import TableObjects from './TableObjects'
import writeJSON from '../../sfps/Common/WriteJSON'

class TableValues{
    goToNextPage(jsonName,pageNo,columnName){
        cy.log('trying to go to next page')
        cy.get(TableObjects.nextButton).invoke('attr','aria-disabled')then(next => {
            cy.log('Success')
            if (next.is(':visible')){
                cy.log('buttonvisible')
                //if (next.is(':enabled')) {
                    cy.log('enabled')
                    cy.get(TableObjects.nextButton).click({force : true})
                    cy.log('Clicked')
                    let state =true
                    cy.once('fail', (err) => { 
                    cy.log('Disabled')
                    state= false  
                        // Capturing the fail event swallows it and lets the test succeed 
                        // Now look for the expected messages expect(err.message).to.include('cy.click() failed because this element'); expect(err.message).to.include('is being covered by another element'); done(); });
                    })
                    if (state=false)
                    {
                        return state;
                    }
                        const val= new TableValues  
                    pageNo=pageNo+1
                    cy.log('Newpage')
                    val.writeTableValues(jsonName,pageNo,columnName)
               // }
            }
        })
    }
    writeTableValues(jsonName,pageNo,columnName){
        
        const write = new writeJSON
        //write.start('PeopleAndDeviceStudentsTable')
        let colNum = TableObjects.getColumnNumber(columnName)
        cy.log('Column number : '+colNum)
        cy.writeFile('./cypress/fixtures/'+jsonName+'.json','\n'+'"Column'+colNum+'Page'+pageNo+'": [', { flag: 'a+' })
        cy.get(TableObjects.rowCount).its('length').then(numberOfRows=>{
            for(let row=1; row<=numberOfRows; row++){
                cy.log('Number of rows : '+numberOfRows)
                 //.ant-table-row:nth-child(1)>td:nth-child(5)
                let locator = TableObjects.rowCount+':nth-child('+row+')>td:nth-child('+colNum+')'
                cy.get(locator).invoke('text').then(value=>{
                    cy.writeFile('./cypress/fixtures/'+jsonName+'.json',value , { flag: 'a+' })
                })
                if(row < numberOfRows){
                    cy.writeFile('./cypress/fixtures/'+jsonName+'.json',' ,', { flag: 'a+' })
                }
            }
            cy.writeFile('./cypress/fixtures/'+jsonName+'.json','] ,' , { flag: 'a+' })
        })
        const val= new TableValues
        cy.log('Page : '+pageNo)
        val.goToNextPage(jsonName,pageNo,columnName)
        //write.end('PeopleAndDeviceStudentsTable')
        return this
    }
    compareChartTotalWithTableTotal(dropdownID){
        cy.readFile('./cypress/fixtures/SfpsPeopleAndDeviceChart.json').then((total) => {
            let indexName = dropdownID+'Total'
            let totalActual = parseInt((total[indexName]).replace(',',''));
            cy.log(totalActual)
            let sum = 0;
            let colNum = TableObjects.getColumnNumber(dropdownID)
            let dataKey = 'Column'+colNum+'Page1'
            cy.readFile('./cypress/fixtures/SfpsPeopleAndDeviceStudentsTable.json').then((value) => {
                for(let i=0; i<(value[dataKey].length); i++){
                    sum = value[dataKey][i]+sum
                }
                expect(totalActual).to.equal(sum)
            })
        })
        return this
    }
    compareTableValuesWithStudentsTable(jsonName){
        cy.readFile('./cypress/fixtures/SfpsPeopleAndDeviceStudentsTable.json').then((valueA) => {
            cy.readFile('./cypress/fixtures/'+jsonName+'.json').then((valueB) => {
                let jsonAsStringArrayA = Object.entries(valueA).toString().split(',')
                let jsonAsStringArrayB = Object.entries(valueB).toString().split(',')
                for(let i =0; i<=jsonAsStringArrayA.length; i++){
                    expect(jsonAsStringArrayA[i]).to.equal(jsonAsStringArrayB[i])
                }  
            })
        })
    }
}export default TableValues
