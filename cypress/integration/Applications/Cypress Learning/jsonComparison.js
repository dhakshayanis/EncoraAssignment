describe('COmpre JSON ',function()
{
   it('navigate to People and Device',function()
   {
    const k1 = { "fruit": '🥝', "one":"2" };
    const k2 = { fruit: '🥝', "one":"1" };
    expect(Object.entries(k1).toString()).to.equal(Object.entries(k2).toString())
    })
    it('navigate to People and Device',function()
    {
        cy.readFile('./cypress/fixtures/PeopleAndDeviceStudentsTable.json').then((valueA) => {
            cy.readFile('./cypress/fixtures/PeopleAndDeviceSchoolsTable.json').then((valueB) => {
                let jsonAsStringArrayA = Object.entries(valueA).toString().split(',')
                let jsonAsStringArrayB = Object.entries(valueB).toString().split(',')
                for(let i =0; i<=jsonAsStringArrayA.length; i++){
                    expect(jsonAsStringArrayA[i]).to.equal(jsonAsStringArrayB[i])
                }  
            })
        })
    })
    it('json',function()
    {
        cy.readFile('./cypress/fixtures/UsageAnalysisStudentskpis.json').then((valueA) => {
            let barname = "Avg # of Students Active"
            cy.log(valueA[barname])
            cy.log(valueA.barname)
        })
    })
    it('jso',function(){
        var remoteJSON = {"allowExternalMembers": "false", "whoCanJoin": "CAN_REQUEST_TO_JOIN"};
        var localJSON = {"whoCanJoin": "CAN_REQUEST_TO_JOIN", "allowExternalMembers": "false"};
        expect(remoteJSON).to.equal(remoteJSON)
    })
    it('jso',function(){
        cy.readFile('./cypress/fixtures/filterJson.json').then((val)=>{
            var remoteJSON = JSON.stringify(val)
            var localJSON = JSON.stringify(val)
            expect(remoteJSON).to.equal(localJSON)
        })
        
        
        
    })

})