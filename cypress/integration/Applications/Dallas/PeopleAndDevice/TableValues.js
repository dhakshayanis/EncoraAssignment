import PeopleAndDeviceSanity from './PeopleAndDeviceSanity'
import TableObjects from './TableObjects'
import writeJSON from '../../Dallas/Common/WriteJSON'

class TableValues{
    goToNextPage(jsonName,pageNo,columnName){
        const val= new TableValues
        cy.get(TableObjects.nextPage).invoke('attr','aria-disabled').then((disabled)=>{
            cy.log('disabled state ='+disabled)
            if(disabled=="false"){
                cy.get(TableObjects.nextButton).click({force : true})  
                pageNo=pageNo+1
                cy.log('Newpage')
                val.writeTableValues(jsonName,pageNo,columnName)
            }
            else{
                val.goToFirstPage()
            }
        })
    }
    goToFirstPage(){
        cy.get('[title="1"] a').click()
        cy.wait(2000)
    }
    writeTableValues(jsonName,pageNo,columnName){
        const write = new writeJSON
        //write.start('PeopleAndDeviceStudentsTable')
        let colNum = TableObjects.getColumnNumber(columnName)
        cy.log('Column number : '+colNum)
        cy.wait(10000)
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
                    cy.wait(1000)
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
        cy.readFile('./cypress/fixtures/DisdPeopleAndDeviceChart.json').then((total) => {
            let indexName = dropdownID+'Total'
            let totalActual = parseInt((total[indexName]).replace(',',''));
            cy.log(totalActual)
            let sum = 0;
            let colNum = TableObjects.getColumnNumber(dropdownID)
            let dataKey = 'Column'+colNum 
            cy.readFile('./cypress/fixtures/DisdPeopleAndDeviceStudentsTable.json').then((val)=>{
                let res = Object.keys(val).filter(name => name.startsWith(prefix));
                cy.log(res.length);
                let sum = 0
                for(let i=0; i< res.length; i++){
                    let keyName = res[i]
                    let rows = val[keyName].length
                    for(let j=0; j< rows; j++){
                        sum = sum + val[keyName][j]
                    }
                    cy.log(sum)
                }
            })
        })
        return this
    }
    compareTableValuesWithStudentsTable(jsonName){
        cy.readFile('./cypress/fixtures/DisdPeopleAndDeviceStudentsTable.json').then((valueA) => {
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
