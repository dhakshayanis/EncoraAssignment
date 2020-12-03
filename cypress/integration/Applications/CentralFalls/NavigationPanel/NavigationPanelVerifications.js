import TrackingAtAGlanceObjects from "../TrackingAtAGlance/TrackingAtAGlanceObjects";
import Filters from "./Filters";

class NavigationPanelVerifications{
    static AtaGlanceDefaultFilterHeaders=[Filters.schoolYear, Filters.specialGroup]
    static AtaGlanceDefaultFilterOptions=["2021"]
    static AtaGlanceDefaultFilters = //'{ "'+TrackingAtAGlanceObjects.pagetitle+'" : {"Default":
                    '{"'+Filters.schoolYear+'":["'+Filters.SchoolYearOptions[1]+'"],"'+
                    Filters.specialGroup+'":["All students"]}'

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
    }/*
    static getExpectedFilterHeaders(pageName,filterOption){
        let expectedFilterHeaders = NavigationPanelVerifications[pageName.replace(/ /g,'')+filterOption+'FilterHeaders']
        ////*if(filterOptionsJsonName!='Default'){
            expectedFilterHeaders = expectedFilterHeaders+filterHeader
        }////
        return expectedFilterHeaders;
    }
    static getExpectedFilterOptions(pageName,filterOption){
        let expectedFilterOptions = NavigationPanelVerifications[pageName.replace(/ /g,'')+filterOption+'FilterOptions']
        ////*if(filterOptionsJsonName!='Default'){
            expectedFilterOptions = expectedFilterOptions.concat(filterOption)
        }////
        return expectedFilterOptions;
    }*/
}
export default NavigationPanelVerifications