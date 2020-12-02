import NavigationPanelVerifications from '../NavigationPanel/NavigationPanelVerifications'
import TrackingAtAGlanceObjects from '../TrackingAtAGlance/TrackingAtAGlanceObjects'
import WriteJson from './WriteJSON'

class FiltersDisplayedInAPage{

    static filterName = ' .badge-title'
    static dropdownOption=' .badge-label'
    static filtersCount = '//*[@class="badges"]'//'.badges:nth-of-type(1)'
    static filterHeadersJsonName = 'NavigationPanelFilterHeaders'
    static filterOptionsJsonName = 'NavigationPanelFilterOptions'

    writeFilters(pageName, filterOption){
        const write = new WriteJson
        cy.xpath(FiltersDisplayedInAPage.filtersCount).then((count)=>{
            let noOfFilters = count.length;
            write.startArray(FiltersDisplayedInAPage.filterHeadersJsonName,pageName+filterOption)
            write.startArray(FiltersDisplayedInAPage.filterOptionsJsonName,pageName+filterOption)
            for(let i=1; i<=noOfFilters; i++){
                cy.xpath(FiltersDisplayedInAPage.filtersCount+'['+i+']').within(()=>{
                    cy.get(FiltersDisplayedInAPage.filterName).invoke('text').then((header)=>{
                        write.writeValuesInArray(FiltersDisplayedInAPage.filterHeadersJsonName,'"'+header+'"')
                        cy.get(FiltersDisplayedInAPage.dropdownOption).invoke('text').then((option)=>{
                            for(let j=1; j<=option.length; j++){
                                write.writeValuesInArray(FiltersDisplayedInAPage.filterOptionsJsonName,'"'+option+'"')
                                if(j<option.length){
                                    write.writeValuesInArray(FiltersDisplayedInAPage.filterOptionsJsonName,',')
                                }
                            }
                        })
                    })
                })
                if(i<noOfFilters){
                    write.writeValuesInArray(FiltersDisplayedInAPage.filterHeadersJsonName,',')
                }
            }

        })
        write.endArray(FiltersDisplayedInAPage.filterHeadersJsonName)
        write.endArray(FiltersDisplayedInAPage.filterOptionsJsonName)
    }
    checkFiltersAreApplied(pageName,filterOption){
        let expectedFilterOptions = NavigationPanelVerifications.getExpectedFilterOptions(pageName,filterOption)
        cy.log(expectedFilterOptions)
        cy.readFile('./cypress/fixtures/'+FiltersDisplayedInAPage.filterHeadersJsonName+'.json').then((headers)=>{
            let filterName = headers[pageName+filterOption]
            cy.readFile('./cypress/fixtures/'+FiltersDisplayedInAPage.filterOptionsJsonName+'.json').then((dd)=>{
                let ddName = dd[pageName+filterOption]
                expect(expectedFilterOptions.length).to.equal(ddName.length)
                for(let i =0; i<expectedFilterOptions.length; i++){
                    expect(expectedFilterOptions[i]).to.equal(ddName[i])
                }
            })
        })
    }
    verifyDefaultFilters(pageName){
        const write = new WriteJson
        const filters = new FiltersDisplayedInAPage
        if(pageName == TrackingAtAGlanceObjects.pagetitle){
            cy.log('Started json')
            write.start(FiltersDisplayedInAPage.filterHeadersJsonName)
            write.start(FiltersDisplayedInAPage.filterOptionsJsonName)
        }
        cy.log('created')
        filters.writeFilters(pageName, 'Default')
        filters.checkFiltersAreApplied(pageName, 'Default')
    }

}
export default FiltersDisplayedInAPage