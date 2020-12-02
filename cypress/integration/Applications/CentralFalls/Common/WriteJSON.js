import TrackingAtAGlanceObjects from "../TrackingAtAGlance/TrackingAtAGlanceObjects"

class writeJSON{
    writeValuesInJSON(pageName,key,value){
        cy.writeFile('./cypress/fixtures/'+pageName+'.json','\n"'+key+'": "'+value+'",', { flag: 'a+' })
        return this
    }
    start(pageName){
        cy.writeFile('./cypress/fixtures/'+pageName+'.json', '{ ')
        return this
    }
    end(pageName){
        cy.writeFile('./cypress/fixtures/'+pageName+'.json', '\n"End" : "dummy" \n } ',{ flag: 'a+' })
        return this
    }
    startArray(pageName,key){
        cy.writeFile('./cypress/fixtures/'+pageName+'.json','\n'+'"'+key+'": [', { flag: 'a+' })
    }
    writeValuesInArray(pageName,value){
        cy.writeFile('./cypress/fixtures/'+pageName+'.json',value , { flag: 'a+' })
    }
    endArray(pageName){
        cy.writeFile('./cypress/fixtures/'+pageName+'.json','] ,' , { flag: 'a+' })
    }
    jsonWithinJson(pageName,filterOption){
        if(pageName== TrackingAtAGlanceObjects.pagetitle)
        cy.writeFile('./cypress/fixtures/'+pageName+'.json','{', { flag: 'a+' })
    }
}export default writeJSON