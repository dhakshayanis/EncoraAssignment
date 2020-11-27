class CheckPercentageSum{
    percentageCheckIn(boxName){
        cy.readFile('./cypress/fixtures/BpsUsageAnalysis'+boxName+'kpis.json').then((value)=>{
            let active = parseFloat(value["Avg # of "+boxName+" Active"].replace('%',''))
            let inactive = parseFloat(value["Avg # of "+boxName+" InActive"].replace('%',''))
            expect(active+inactive).to.equal(100)
        })
    }
}
export default CheckPercentageSum