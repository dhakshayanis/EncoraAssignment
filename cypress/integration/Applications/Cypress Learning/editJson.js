describe('one',function()
{

   it('read one',function()
   {
    var json = '{"hi":"ciao"}';

    //Parse the JSON: convert it into an object
    var parsedJson =JSON.parse(json);
    
    //add whatever you want
    parsedJson.hello = 'bye';
    cy.log(parsedJson)
    cy.log('\'')
    cy.log(JSON.stringify(parsedJson))
   })
   it('edit multiple json',function()
   {
        cy.readFile('./cypress/fixtures/MultipleJson.json').then((val)=>{
            var parsedJson = JSON.stringify(val).replace('}}}','}},').replace(/{/g,'{\n').replace(/],/g,'],\n').replace(/}/g,'}\n').replace(/}\n,/g,'},')
            parsedJson= parsedJson+'\n"Usage":{ "one": 1, "two": 2}}'
            cy.log(parsedJson)
            cy.writeFile('./cypress/fixtures/MultipleJson1.json',parsedJson)
        })
        cy.readFile('./cypress/fixtures/MultipleJson1.json').then((val1)=>{
            var parsedJson1 = JSON.stringify(val1)
            cy.log(parsedJson1)
        })
        
   })
   it('edit multiple json',function()
   {
        var str = '{"hello":"new"}';
    cy.readFile('./cypress/fixtures/MultipleJson.json').then((val)=>{
        var json = JSON.stringify(val);
        cy.log(json)
        var parsedJson = JSON.parse(json)
        cy.log(parsedJson)
        parsedJson["usage"]= {};
        parsedJson["usage"]["hello"] =[];
        parsedJson["usage"]["hello"][0] = "new";
        cy.log(parsedJson["usage"]["hello"][0])
        cy.writeFile('./cypress/fixtures/parsedJSON.json',parsedJson)
        })
    })
})