import writeJson from '../Common/WriteJSON'

class KPI{
    
    static bars = '//*[@class="wrap-component printIgnore"]'//' .printIgnore>.wrap-component-container'
    static page = '//*[@class="multiple-instance-component-page-info"]'//' .multiple-instance-component-page-info'
    static students = '//*[@id="EXTERNAL_GENERIC_COMPONENT"][2]'//'#EXTERNAL_GENERIC_COMPONENT:nth-child(2)'
    static teachers = '//*[@id="EXTERNAL_GENERIC_COMPONENT"][3]'//'#EXTERNAL_GENERIC_COMPONENT:nth-child(3)'
    static nextIcon = '//*[@class="multiple-instance-component-next-icon"]//*[@viewBox="0 0 24 24"]'
    static previousIcon ='//*[@class="multiple-instance-component-previous-icon"]//*[@viewBox="0 0 24 24"]'

    getKPINamesInaPage(boxName){
        const writing = new writeJson
        cy.xpath(boxName+KPI.bars).then((barsCount)=>{
            let numberOfBars = barsCount.length;
            writing.start('UsageAnalysisKpis')
            writing.startArray('UsageAnalysisKpis',boxName)
            //cy.writeFile('./cypress/fixtures/UsageAnalysisKpis.json','\n'+'"'+boxName+'Page1": [', { flag: 'a+' })
            for(let i=1; i<=numberOfBars; i++){
                let kpiXpath = '('+boxName+KPI.bars+')['+i+']'
                cy.xpath(kpiXpath).invoke('text').then(kpiNames=>{
                    writing.writeValuesInArray('UsageAnalysisKpis',kpiNames)
                })
                if(i < numberOfBars){
                    cy.writeFile('./cypress/fixtures/'+'UsageAnalysisKpis'+'.json',' ,', { flag: 'a+' })
                }
            }
            writing.endArray('UsageAnalysisKpis')
        })
    }
    navigateToPage(boxName){
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
        const kpiName = new KPI
        cy.xpath(boxName+KPI.page).invoke('text').then(pageText=>{
            let splittedText = pageText.split(' of ')
            let lastPageNumber = parseInt(splittedText[1])
            for(let page = 1;page<=lastPageNumber; page++){
                kpiName.getKPINamesInaPage(boxName)
                kpiName.navigateToPage(boxName)
            }
        })
    }
}export default KPI