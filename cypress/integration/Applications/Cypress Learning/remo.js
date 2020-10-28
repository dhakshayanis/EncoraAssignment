import RemoveDuplicateInArrayExample from '../Cypress Learning/removeDuplicates'
import Duplicates from '../Cypress Learning/duplicates'
//const { default: RemoveDuplicateInArrayExample } = require("./removeDuplicates")

describe('one',function()
{
   /*it('valid Test',function()
   {
    const remo = new RemoveDuplicateInArrayExample
    remo.final()
    })*/

    it('valid Test',function()
   {
    const remo = new Duplicates
    remo.finalResult()
    })
    
})