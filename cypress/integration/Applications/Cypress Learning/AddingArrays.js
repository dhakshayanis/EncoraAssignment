describe('one',function()
{

   it('adding array',function()
   {
    let arr1=["Hi", "Hello", "How"];
    let word1="are";
    let res = arr1.concat(word1)
    cy.log(res.length)
    cy.log(res[0]+res[1]+res[2]+res[3])
   })
})