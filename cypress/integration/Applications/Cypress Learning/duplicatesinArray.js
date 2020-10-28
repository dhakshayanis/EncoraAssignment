import dups from './dups'

describe('one',function()
{
    it('valid Test',function()
   {
    cy.readFile('./cypress/fixtures/PeopleAndDeviceStudentsTable.json').then((val) => {
        let valArray = val.test
        cy.log(valArray)
        const remo = new dups
        cy.log(remo.removeDuplicateFromArray(valArray).length)
        /*
function removeDuplicateFromArray(valArray) {
  var uniqueVal = {};
  valArray.forEach(function(i) {
    if(!uniqueVal[i]) {
      uniqueVal[i] = true;
    }
       
  });
  
  return Object.keys(uniqueVal);  
}*/
})
        
        //cy.log(removeDuplicateFromArray(valArray))
    })
    
})