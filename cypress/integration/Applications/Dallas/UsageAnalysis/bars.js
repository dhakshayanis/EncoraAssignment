import writeJson from '../Common/WriteJSON'
import UsageAnalysisObjects from './UsageAnalysisObjects'

class KPI{
    
    static bars = '//*[@class="wrap-component printIgnore"]'//' .printIgnore>.wrap-component-container'
    static page = '//*[@class="multiple-instance-component-page-info"]'//' .multiple-instance-component-page-info'
    static students = '//*[@id="EXTERNAL_GENERIC_COMPONENT"][2]'//'#EXTERNAL_GENERIC_COMPONENT:nth-child(2)'
    static teachers = '//*[@id="EXTERNAL_GENERIC_COMPONENT"][3]'//'#EXTERNAL_GENERIC_COMPONENT:nth-child(3)'
    static barName = '//*[@style="font-size: 12px; margin-right: 10px; width: 100%; line-height: 1;"]'
    static barValue = '//*[@style="font-size: 16px; display: flex; flex-direction: row;"]'
    static nextIcon = '//*[@class="multiple-instance-component-next-icon"]//*[@viewBox="0 0 24 24"]'
    static previousIcon ='//*[@class="multiple-instance-component-previous-icon"]//*[@viewBox="0 0 24 24"]'


    getKPINamesInaPage(jsonName,page,boxName){
        const writing = new writeJson
        if(page>1){
            cy.writeFile('./cypress/fixtures/DisdUsageAnalysisKpis.json',' ,', { flag: 'a+' })
        }
        cy.xpath(boxName+KPI.bars).then((barsCount)=>{
            let numberOfBars = barsCount.length;
            for(let i=1; i<=numberOfBars; i++){
                let kpiNamesXpath = '('+boxName+KPI.barName+')['+i+']'
                let kpiValueXpath = '('+boxName+KPI.barValue+')['+i+']'
                cy.xpath(kpiNamesXpath).invoke('text').then(kpiNames=>{
                    cy.xpath(kpiValueXpath).invoke('text').then(kpiValue=>{
                        writing.writeValuesInJSON(jsonName,kpiNames, kpiValue)
                    })
                })
                cy.xpath(kpiNamesXpath).invoke('text').then(kpiNames=>{
                    writing.writeValuesInArray('DisdUsageAnalysisKpis','"'+kpiNames+'"')
                })
                if(i<numberOfBars){
                    cy.writeFile('./cypress/fixtures/DisdUsageAnalysisKpis.json',' ,', { flag: 'a+' })
                }
            }
        })
    }
    static getBoxNameXpath(boxName){
        let boxNameXpath = ""
        if(boxName==UsageAnalysisObjects.studentBoxName){boxNameXpath = KPI.students}
        else{boxNameXpath = KPI.teachers}
        return boxNameXpath
    }
    navigateToPage(boxName){
        //const boxNameXpath = KPI.getBoxNameXpath(boxName)
        cy.xpath(boxName+KPI.page).invoke('text').then(pageText=>{
            let splittedText = pageText.split(' of ')
            let pageNumber = parseInt(splittedText[0])
            let lastPageNumber = parseInt(splittedText[1])
            if(pageNumber<lastPageNumber){
                cy.xpath(boxName+KPI.nextIcon).click()
            }
            else{
                cy.xpath(boxName+KPI.previousIcon).click()
            }
        })
    }
    getTextInAllBars(boxName){
        const writing = new writeJson
        const jsonName = 'DisdUsageAnalysis'+boxName+'kpis'
        writing.start(jsonName)
        writing.startArray('DisdUsageAnalysisKpis',boxName)
        const kpiName = new KPI
        const boxNameXpath = KPI.getBoxNameXpath(boxName)
        cy.xpath(boxNameXpath+KPI.page).invoke('text').then(pageText=>{
            let splittedText = pageText.split(' of ')
            let lastPageNumber = parseInt(splittedText[1])
            for(let page = 1;page<=lastPageNumber; page++){
                kpiName.getKPINamesInaPage(jsonName,page,boxNameXpath)
                kpiName.navigateToPage(boxNameXpath)
            }
        })
        writing.endArray('DisdUsageAnalysisKpis')
        writing.end(jsonName)
    }
    checkBarNames(boxName){
        cy.readFile('./cypress/fixtures/DisdUsageAnalysisKpis.json').then((name)=>{
            for(let i=1; i<= name[boxName].length; i++){
                let actualName = name[boxName][i-1]
                let expectedName = UsageAnalysisObjects[boxName+'BarName'+i]
                expect(actualName).to.equal(expectedName)
            }
        })
    }
}export default KPI