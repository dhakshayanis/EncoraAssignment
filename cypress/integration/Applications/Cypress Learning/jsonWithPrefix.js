describe('COmpre JSON ',function()
{
   it('static json ',function()
   {
    var obj = {
        "cmd.test1":"test1",
        "cmd.test2":"test2",
        "ab.test1":"nthing"
    }, 
    res = Object.keys(obj).filter(v => v.startsWith('cmd'));
    
    cy.log(res);
    })
    it('People and Device json',function()
   { 
    cy.readFile('./cypress/fixtures/SfpsPeopleAndDeviceStudentsTable.json').then((val)=>{
        let res = Object.keys(val).filter(name => name.startsWith('Column5'));
        cy.log(res.length);
        let sum = 0
        for(let i=0; i< res.length; i++){
            let keyName = res[i]
            let rows = val[keyName].length
            for(let j=0; j< rows; j++){
                sum = sum + val[keyName][j]
            }
            cy.log(sum)
        }
    })
})
})
