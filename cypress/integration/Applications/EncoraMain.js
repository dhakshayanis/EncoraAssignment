class EncoraMain{
    getClothes(cityName, apiKey){

        const current ='api.openweathermap.org/data/2.5/weather?q='+cityName+'&appid='+apiKey
        let clothes=''
        cy.request(current).then((response)=>{
            expect(response.status).equal(200)
            cy.writeFile('./cypress/fixtures/'+cityName+'.json', response.body)
            cy.readFile('./cypress/fixtures/'+cityName+'.json').then((value) => {
                
                const kelvin = value.main.temp 
                const temp = (kelvin-273).toFixed(2)
                cy.log('Temperature in '+cityName+' is : '+temp+' degree centigrade')

                var json = JSON.stringify(value);
                var parsedJson = JSON.parse(json)

                if(temp<20){
                    cy.log('Place is cold')
                    clothes = 'Woollens'
                    parsedJson["clothes"] = clothes;
                }
                if(temp>20){
                    cy.log('Place is not cold')
                    clothes = 'Swimmers'
                    parsedJson["clothes"] = clothes;
                }
                cy.writeFile('./cypress/fixtures/'+cityName+'.json',parsedJson)
            })
        })
    }
}
export default EncoraMain