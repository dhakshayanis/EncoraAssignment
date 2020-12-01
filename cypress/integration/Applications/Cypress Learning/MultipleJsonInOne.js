import TrackingAtAGlanceObjects from '../CentralFalls/TrackingAtAGlance/TrackingAtAGlanceObjects'
import FiltersDisplayedInAPage from '../CentralFalls/Common/FiltersDisplayedInPage'
import NavigationPanelVerifications from '../CentralFalls/NavigationPanel/NavigationPanelVerifications'

describe('one',function()
{

   it('read one',function()
   {
        cy.readFile('./cypress/fixtures/MultipleJson.json').then((val)=>{
            let jsonName= val['PeopleAndDevicesDefault']
            cy.log(jsonName)
            let arr =  jsonName['FilterOptions']
            cy.log(arr)
        })
   })
   it('read 2 in one',function()
   {
        cy.readFile('./cypress/fixtures/MultipleJson.json').then((val)=>{
            let jsonName= val['At A Glance']
            let key = Object.keys(jsonName)
            cy.log(Object.keys(jsonName).length)
            cy.log(key[0])
            let arr =  jsonName['Default']['FilterOptions'][1]
            cy.log(arr)
        })
   })
        it('read in one',function()
        {
            let pageName = 'At a Glance'
            let filterOption = 'Default'
        let expectedFilterOptions = NavigationPanelVerifications.getExpectedFilterOptions(pageName,filterOption)
        cy.log(expectedFilterOptions)
        let expectedFilterHeaders = NavigationPanelVerifications.getExpectedFilterHeaders(pageName,filterOption)
        cy.log(expectedFilterHeaders)
        //cy.readFile('./cypress/fixtures/'+FiltersDisplayedInAPage.filterHeadersJsonName+'.json').then((headers)=>{
           // let filterName = headers[pageName+filterOption]
            cy.readFile('./cypress/fixtures/'+FiltersDisplayedInAPage.filterOptionsJsonName+'.json').then((filtersNamesInJson)=>{
                let headerInJson = filtersNamesInJson[pageName][filterOption]
                let filtersCountInJson = Object.keys(headerInJson).length
                expect(expectedFilterOptions.length).to.equal(filtersCountInJson)
                let keyInJson = Object.keys(headerInJson)
                for(let i =0; i<expectedFilterHeaders.length; i++){
                    expect(expectedFilterHeaders[i]).to.equal(keyInJson[i])
                    let filterInJson = filtersNamesInJson[pageName][filterOption][expectedFilterHeaders[i]]
                    cy.log(filterInJson)
                    expect(expectedFilterOptions.length).to.equal(filterInJson.length)
                    for(let j =0; j<filterInJson.length; j++){
                        expect(expectedFilterOptions[i].replace(/ /g, '')).to.equal(filterInJson[i].replace(/ /g,''))
                    }
                }
            })
   })
})