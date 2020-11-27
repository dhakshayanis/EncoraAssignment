describe('one',function()
{

   it('cureent date',function()
   {
       var d = new Date;
       cy.log('time '+d.getTime())
       cy.log('hours minutes seconds'+d.getHours()+': '+d.getMinutes()+': '+d.getSeconds())

   })
})