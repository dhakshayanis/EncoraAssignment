describe('one',function()
{

   it('write Json',function()
   {
    cy.writeFile('testData.json', { name: 'Eliza', email: 'eliza@example.com' })
   })

   it('read Json',function()
   {
    cy.readFile('testdata.json').then((user) => {
        expect(user.name).to.equal('Eliza') // true
      })
   })
  
})

