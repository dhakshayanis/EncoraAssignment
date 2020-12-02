import NavigationPanelVerifications from '../NavigationPanel/NavigationPanelVerifications'
import TrackingAtAGlanceObjects from '../TrackingAtAGlance/TrackingAtAGlanceObjects'
import WriteJson from './WriteJSON'

class FiltersDisplayedInAPage{

    static filterName = ' .badge-title'
    static dropdownOption=' .badge-label'
    static filtersCount = '//*[@class="badges"]'//'.badges:nth-of-type(1)'
    static filterHeadersJsonName = 'NavigationPanelFilterHeaders'
    static filterOptionsJsonName = 'CfsNavigationPanelFilterOptions'

    writeFilters(pageName, filterOption){
        const write = new WriteJson
        cy.xpath(FiltersDisplayedInAPage.filtersCount).then((count)=>{
            let noOfFilters = count.length;
            cy.log('filter count '+noOfFilters)
            //write.startArray(FiltersDisplayedInAPage.filterHeadersJsonName,pageName+filterOption)
            //write.startArray(FiltersDisplayedInAPage.filterOptionsJsonName,pageName+filterOption)
            cy.readFile('./cypress/fixtures/'+FiltersDisplayedInAPage.filterOptionsJsonName+'.json').then((val)=>{
                var json = JSON.stringify(val);
                cy.log(json)
                var parsedJson = JSON.parse(json)
                cy.log(parsedJson)
                parsedJson[pageName][filterOption] = {};
            for(let i=1; i<=noOfFilters; i++){
                cy.xpath(FiltersDisplayedInAPage.filtersCount+'['+i+']').within(()=>{
                    cy.get(FiltersDisplayedInAPage.filterName).invoke('text').then((header)=>{
                        //write.writeValuesInArray(FiltersDisplayedInAPage.filterHeadersJsonName,'"'+header+'"')
                        parsedJson[pageName][filterOption][header] = [];
                        cy.get(FiltersDisplayedInAPage.dropdownOption).then((option)=>{
                            for(let j=1; j<=option.length; j++){
                                cy.get(FiltersDisplayedInAPage.dropdownOption).invoke('text').then((optionText)=>{
                                parsedJson[pageName][filterOption][header][(j-1)] = optionText;
                                })
                            }
                            cy.writeFile('./cypress/fixtures/'+FiltersDisplayedInAPage.filterOptionsJsonName+'.json',parsedJson)
                        })
                    })
                })
            }
        })
        })
    }/*
    checkFiltersAreApplied(pageName,filterOption){
        let expectedFilterOptions = NavigationPanelVerifications.getExpectedFilterOptions(pageName,filterOption)
        cy.log(expectedFilterOptions)
        let expectedFilterHeaders = NavigationPanelVerifications.getExpectedFilterHeaders(pageName,filterOption)
        cy.log(expectedFilterHeaders)
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
    }*/
    checkFiltersAreApplied(){
        cy.readFile('./cypress/fixtures/'+FiltersDisplayedInAPage.filterOptionsJsonName+'.json').then((fromPage)=>{
            cy.readFile('./cypress/fixtures/'+FiltersDisplayedInAPage.filterOptionsJsonName+'.json').then((fromPanel)=>{
                let fromPageJson = JSON.stringify(fromPage)
                let fromPanelJson = JSON.stringify(fromPanel)
                expect(fromPageJson).to.equal(fromPanelJson)
            })
        })
    }
    verifyDefaultFilters(pageName){
        const write = new WriteJson
        const filters = new FiltersDisplayedInAPage
        if(pageName == TrackingAtAGlanceObjects.pagetitle){
            cy.log('Started json')
            write.start(FiltersDisplayedInAPage.filterOptionsJsonName)
            cy.writeFile('./cypress/fixtures/'+FiltersDisplayedInAPage.filterOptionsJsonName+'.json','\n}',{ flag: 'a+' })
        }
        cy.log('created')
        cy.readFile('./cypress/fixtures/'+FiltersDisplayedInAPage.filterOptionsJsonName+'.json').then((val)=>{
            var json = JSON.stringify(val);
            cy.log(json)
            var parsedJson = JSON.parse(json)
            cy.log(parsedJson)
            parsedJson[pageName] = {};
            cy.writeFile('./cypress/fixtures/'+FiltersDisplayedInAPage.filterOptionsJsonName+'.json',parsedJson)
        })
        filters.writeFilters(pageName, 'Default')
        NavigationPanelVerifications.getJson(pageName,'Default','Default')
        filters.checkFiltersAreApplied()
    }

}
export default FiltersDisplayedInAPage