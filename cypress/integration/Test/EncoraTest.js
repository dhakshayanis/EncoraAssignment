import EncoraMain from "../Applications/EncoraMain"

describe('Encora assignment',function()
{

   it('London - Cold place',function()
   {
    
    const cityName ='London' //enter any city name here
    const apiKey = '38dd0c4f5c12cad16859419bad923ddf'//enter your api key here
    
    const dress = new EncoraMain
    dress.getClothes(cityName, apiKey)
    cy.readFile('./cypress/fixtures/'+cityName+'.json').then((value) => {
        expect(value.clothes).to.equal('Woollens')// nter expected clothes here
    })
    })
    it('Chennai - not cold',function()
   {
    
    const cityName ='Chennai'
    const apiKey = '38dd0c4f5c12cad16859419bad923ddf'
    
    const dress = new EncoraMain
    const clothes = dress.getClothes(cityName, apiKey)
    cy.readFile('./cypress/fixtures/'+cityName+'.json').then((value) => {
        expect(value.clothes).to.equal('Swimmers')
    })
})
})
