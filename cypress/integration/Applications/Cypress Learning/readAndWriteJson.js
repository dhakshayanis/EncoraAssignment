
describe('one',function()
{

   it('write Json',function()
   {
      cy.writeFile('testData.json', '{ \n"name": '+'"Eliza"'+',\n "email": "eliza@example.com"')
      cy.writeFile('./cypress/fixtures/testData.json', '{ \n"name": '+'"Eliza"'+',\n "email": "eliza@example.com"'+' ,')
      cy.writeFile('testData.json', ' }', { flag: 'a+' })

   })
/*
   it('write Json',function()
   {
      cy.writeFile('testData.json', '{\n'+'"'+'data'+'":'+''+'"'+'subpagescount'+'"'+',')
   })
   it('write Json',function()
   {  
      cy.writeFile('testData.json', '\n'+'"arra y1": [', { flag: 'a+' })
      for(let i=0; i<=5; i++){
         cy.writeFile('testData.json', i+' ,', { flag: 'a+' })
         }
     
         cy.writeFile('testData.json','0]\n}', { flag: 'a+' })
   })
   it('read Json',function()
   {
      //for(let i=0; i<=5; i++){
         let sum = 0;
         cy.readFile('testData.json').then((user) => {
            //var jsonDatap = JSON.parse(jsonData);
            let ar = "arr"+"a y"+1
            let count = user[ar].length;
            cy.log(count)
            for(let i=0; i<=5; i++){
            sum = user[ar][i]+sum
            }
            expect(sum).to.equal(15)
          })
   })
   it('write Json with char',function()
   {  
      cy.writeFile('testData.json', '\n'+'"array": [', { flag: 'a+' })
      let letter ='a'
      for(let i=0; i<=5; i++){
         cy.writeFile('testData.json', letter+' ,', { flag: 'a+' })
         letter+= letter
         }
     
         cy.writeFile('testData.json','0]\n}', { flag: 'a+' })
   })*/
})

