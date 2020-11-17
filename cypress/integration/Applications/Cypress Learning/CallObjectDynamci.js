import Objects from './Objects'
describe('one',function()
{
   it('valid Test',function()
   {
        for(let i=1; i<=2;i++){
            let obj = 'text'+i
            cy.log(Objects[obj])
            cy.log(Objects[text].length)
        }
    })
    
})