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
}export default writeJSON