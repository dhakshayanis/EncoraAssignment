import UsageAnalysisObjects from "./UsageAnalysisObjects"
import KPI from './bars'
import PageTitleCheck from "../Common/PageTitleCheck"

class goToTab{

    static fiveTabsInStudent = [UsageAnalysisObjects.UsageAnalysisTimeSeries, UsageAnalysisObjects.UsageAnalysisSchoolView, UsageAnalysisObjects.UsageAnalysisDimensionView, UsageAnalysisObjects.UsageAnalysisHeatMapAnalysisView, UsageAnalysisObjects.UsageAnalysisMapView]
    static twoTabsInStudent = [UsageAnalysisObjects.UsageAnalysisSchoolView, UsageAnalysisObjects.UsageAnalysisMapView]
    static fourTabsInStudent = [UsageAnalysisObjects.UsageAnalysisTimeSeries, UsageAnalysisObjects.UsageAnalysisSchoolView, UsageAnalysisObjects.UsageAnalysisDimensionView, UsageAnalysisObjects.UsageAnalysisMapView]
    static oneTabInStudent = [UsageAnalysisObjects.UsageAnalysisSchoolView]
    static twoTabsInTeacher = [UsageAnalysisObjects.UsageAnalysisTimeSeries, UsageAnalysisObjects.UsageAnalysisSchoolView]
    static oneTabInTeacher = [UsageAnalysisObjects.UsageAnalysisSchoolView]
    static threeTabsInTeacher = [UsageAnalysisObjects.UsageAnalysisTimeSeries, UsageAnalysisObjects.UsageAnalysisSchoolView, UsageAnalysisObjects.UsageAnalysisDimensionView]

    static getTabsInBar(barName){
        var tabs = new Map();
        tabs.set(UsageAnalysisObjects.StudentsBarName1, goToTab.fiveTabsInStudent);
        tabs.set(UsageAnalysisObjects.StudentsBarName2, goToTab.fiveTabsInStudent);
        tabs.set(UsageAnalysisObjects.StudentsBarName3, goToTab.twoTabsInStudent);
        tabs.set(UsageAnalysisObjects.StudentsBarName4, goToTab.twoTabsInStudent);
        tabs.set(UsageAnalysisObjects.StudentsBarName5, goToTab.fourTabsInStudent);
        tabs.set(UsageAnalysisObjects.StudentsBarName6, goToTab.fourTabsInStudent);
        tabs.set(UsageAnalysisObjects.StudentsBarName7, goToTab.fourTabsInStudent);
        tabs.set(UsageAnalysisObjects.StudentsBarName8, goToTab.oneTabsInStudent);
        tabs.set(UsageAnalysisObjects.TeachersBarName1, goToTab.threeTabsInTeacher);
        tabs.set(UsageAnalysisObjects.TeachersBarName2, goToTab.threeTabsInTeacher);
        tabs.set(UsageAnalysisObjects.TeachersBarName3, goToTab.oneTabInTeacher);
        tabs.set(UsageAnalysisObjects.TeachersBarName4, goToTab.oneTabInTeacher);
        tabs.set(UsageAnalysisObjects.TeachersBarName5, goToTab.twoTabInTeacher);
       
        return tabs.get(barName)
    }

    goToTab(option){
        cy.wait(4000)
        cy.contains(option).click()
        cy.wait(3000)
        return this
    }
    clickKpi(boxName, page, operation){
        const boxNameXpath = KPI.getBoxNameXpath(boxName)
        cy.log('bars : '+KPI.getBoxNameXpath(boxName)+KPI.bars)
        cy.xpath(boxNameXpath+KPI.bars).then((barsCount)=>{
            let numberOfBars = barsCount.length;
            cy.log('bars ='+numberOfBars)
            for(let i=1; i<= numberOfBars; i++){
                cy.get(PageTitleCheck.pageTitle).scrollIntoView()
                let barId = boxName + 'BarName' +(i+((page-1)*5))
                cy.wait(5000)
                let barName = UsageAnalysisObjects[barId]
                cy.contains(barName).click()
                cy.log('barname ='+barName)
                let tabs = goToTab.getTabsInBar(barName)
                cy.log(tabs.length)
                cy.get(UsageAnalysisObjects.textInTab).scrollIntoView()
                for(let j=0; j< tabs.length; j++){
                    if(operation=='Tab name'){
                        cy.contains(tabs[j]).should('be.visible')
                    }
                    if(operation=='Tab text'){
                        cy.contains(tabs[j]).click()
                        cy.get(UsageAnalysisObjects.textInTab).contains(barName).should('be.visible')
                        cy.readFile('./cypress/fixtures/DisdUsageAnalysis'+boxName+'kpis.json').then((name)=>{
                            let expectedValue = name[barName]
                            cy.get(UsageAnalysisObjects.textInTab).contains(expectedValue).should('be.visible')
                        })
                    }                   
                }
            }
        })
    }
    clickBarsInAllPages(boxName, operation){
        const tab = new goToTab
        const kpiName = new KPI
        const boxNameXpath = KPI.getBoxNameXpath(boxName)
        cy.wait(3000)
        cy.get(PageTitleCheck.pageTitle).scrollIntoView()
        cy.xpath(boxNameXpath+KPI.page).invoke('text').then(pageText=>{
            let splittedText = pageText.split(' of ')
            let lastPageNumber = parseInt(splittedText[1])
            cy.log('number of pages : '+lastPageNumber)
            for(let page = 1;page<=lastPageNumber; page++){
                cy.pause()
                tab.clickKpi(boxName, page, operation)
                kpiName.navigateToPage(boxNameXpath)
            }
        })
    }
    verifyTabsInEachBars(boxName){
        cy.wait(3000)
        const tab = new goToTab
        tab.clickBarsInAllPages(boxName, 'Tab name')
    }
    verifyTextInTabForAllKpis(boxName){
        cy.wait(3000)
        const tab = new goToTab
        tab.clickBarsInAllPages(boxName, 'Tab text')        
    }
}
export default goToTab