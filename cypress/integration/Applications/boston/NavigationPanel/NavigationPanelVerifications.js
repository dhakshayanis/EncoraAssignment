import TrackingAtAGlanceObjects from "../TrackingAtAGlance/TrackingAtAGlanceObjects";
import Filters from "./Filters";

class NavigationPanelVerifications{
    static one ='{"1":"aa", "2":"bb"}'
    static AtaGlanceDefaultFilterHeaders=[Filters.schoolYear, Filters.specialGroup]
    static AtaGlanceDefaultFilters = '{"'+Filters.schoolYear+'":["'+Filters.SchoolYearOptions[1]+'"],"'+
                                        Filters.specialGroup+'":["All students"]}'
    static PeopleandDeviceDefaultFilters = '{"'+Filters.schoolYear+'":["'+Filters.SchoolYearOptions[1]+'"]"}'
    static UsageAnalysisDefaultFilters = '{"'+Filters.schoolYear+'":["'+Filters.SchoolYearOptions[1]+'"]"}'
    static EdTechOverviewDefaultFilters = '{"'+Filters.schoolYear+'":["'+Filters.SchoolYearOptions[1]+'"]"}'

    static getJson(pageName,filterHeader,filterOption){
        if((pageName == TrackingAtAGlanceObjects.pagetitle) && (filterOption=='Default')){
            cy.writeFile('./cypress/fixtures/CfsfiltersVerifications.json','{}')
        }
        cy.readFile('./cypress/fixtures/CfsfiltersVerifications.json').then((val)=>{
            var json = JSON.stringify(val);
            cy.log(json)
            var parsedJson = JSON.parse(json)
            if(filterOption=='Default'){
                parsedJson[pageName] = {}
            }
            parsedJson[pageName][filterOption] ={}
            let defaultFiltersToBeUpdated = NavigationPanelVerifications[pageName.replace(/ /g,'')+'DefaultFilters']
            Object.assign(parsedJson[pageName][filterOption], JSON.parse(defaultFiltersToBeUpdated))
            cy.writeFile('./cypress/fixtures/CfsfiltersVerifications.json',parsedJson)
                if(filterOption!='Default'){
                    parsedJson[pageName][filterOption][filterHeader] = filterOption
                    cy.writeFile('./cypress/fixtures/CfsfiltersVerifications.json',parsedJson)
            }
        })
    }
   
}
export default NavigationPanelVerifications