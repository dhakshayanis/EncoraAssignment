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
        tabs.set(UsageAnalysisObjects.studentsBarName1, goToTab.fiveTabsInStudent);
        tabs.set(UsageAnalysisObjects.studentsBarName2, this.fiveTabsInStudent);
        tabs.set(UsageAnalysisObjects.studentsBarName3, this.twoTabsInStudent);
        tabs.set(UsageAnalysisObjects.studentsBarName4, this.twoTabsInStudent);
        tabs.set(UsageAnalysisObjects.studentsBarName5, this.twoTabsInStudent);
        tabs.set(UsageAnalysisObjects.studentsBarName6, this.twoTabsInStudent);
        tabs.set(UsageAnalysisObjects.studentsBarName7, this.fourTabsInStudent);
        tabs.set(UsageAnalysisObjects.studentsBarName8, this.fourTabsInStudent);
        tabs.set(UsageAnalysisObjects.studentsBarName9, this.fourTabsInStudent);
        tabs.set(UsageAnalysisObjects.studentsBarName10, this.oneTabInStudent);
        tabs.set(UsageAnalysisObjects.teachersBarName1, this.threeTabsInTeacher);
        tabs.set(UsageAnalysisObjects.teachersBarName2, this.threeTabsInTeacher);
        tabs.set(UsageAnalysisObjects.teachersBarName3, this.oneTabInTeacher);
        tabs.set(UsageAnalysisObjects.teachersBarName4, this.oneTabInTeacher);
        tabs.set(UsageAnalysisObjects.teachersBarName5, this.oneTabInTeacher);
        tabs.set(UsageAnalysisObjects.teachersBarName6, this.oneTabInTeacher);
        tabs.set(UsageAnalysisObjects.teachersBarName7, this.twoTabsInTeacher);
        return tabs.get(barName)
    }

    goToTab(option){
        cy.contains(option).click()
        cy.wait(3000)
        return this
    }
    clickKpi(boxName, operation){
        cy.xpath(KPI.getBoxNameXpath(boxName)+KPI.bars).then((barsCount)=>{
            let numberOfBars = barsCount.length;
            cy.log('bars ='+numberOfBars)
            for(let i=1; i<= numberOfBars; i++){
                let barId = boxName + 'BarName' +i
                let barName = UsageAnalysisObjects[barId]
                cy.contains(barName).click()
                cy.log('barname ='+barName)
                let tabs = goToTab.getTabsInBar(barName)
                for(let j=1; j<= tabs.length; j++){
                    if(operation=='Tab name'){
                        cy.contains(tabs[j]).should('be.visible')
                    }
                    if(operation=='Tab text'){
                        cy.get(UsageAnalysisObjects.textInTab).cntains(barName).should('be.visible')
                        cy.readFile('./cypress/fixtures/UsageAnalysis'+boxName+'kpis.json').then((name)=>{
                            expectedValue = name.barName
                            cy.get(UsageAnalysisObjects.textInTab).contains(expectedValue).should('be.visible')
                        })
                    }                   
                }
            }
        })
    }
    clickBarsInAllPages(boxName, operation){
        cy.get(PageTitleCheck.pageTitle).scrollIntoView()
        const tab = new goToTab
        const kpiName = new KPI
        const boxNameXpath = KPI.getBoxNameXpath(boxName)
        cy.xpath(boxNameXpath+KPI.page).invoke('text').then(pageText=>{
            let splittedText = pageText.split(' of ')
            let lastPageNumber = parseInt(splittedText[1])
            cy.log('number of pages : '+lastPageNumber)
            for(let page = 1;page<=lastPageNumber; page++){
                tab.clickKpi(boxName, operation)
                kpiName.navigateToPage(boxNameXpath)
            }
        })
    }
    verifyTabsInEachBars(boxName){
        const tab = new goToTab
        tab.clickBarsInAllPages(boxName, 'Tab name')
    }
    verifyTextInTabForAllKpis(boxName){
        const tab = new goToTab
        tab.clickBarsInAllPages(boxName, 'Tab taxt')        
    }
}
export default goToTab