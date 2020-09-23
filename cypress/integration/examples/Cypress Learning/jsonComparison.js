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
})
    /*// true
    //cy.readFile('./cypress/fixtures/PeopleAndDeviceStudentsTable.json').then((valueA) => {
        //cy.readFile('./cypress/fixtures/PeopleAndDeviceSchoolsTable.json').then((valueB) => {
            //JSON.stringify(valueA) === JSON.stringify(valueB); // true
            // Using Lodash
           // _.isEqual(valueA, valueB);
           // expect(valueA).to.equal(valueB)
           if(Object.keys(valueA).length==Object.keys(valueB).length){
            for(key in valueA) { 
                if(valueA[key] == valueB[key]) {
                    continue;
                }
                else {
                    flag=false;
                    break;
                }
            }
        }
        else {
            flag=false;
        }
        //})
    //})
    /* var obj1 = {"name":"Sam","class":"MCA"};
var obj2 = {"class":"MCA","name":"Sam"};
    var flag=true;

if(Object.keys(obj1).length==Object.keys(obj2).length){
    for(key in obj1) { 
        if(obj1[key] == obj2[key]) {
            continue;
        }
        else {
            flag=false;
            break;
        }
    }
}
else {
    flag=false;
}
console.log("is object equal"+flag);
   })
})*/
