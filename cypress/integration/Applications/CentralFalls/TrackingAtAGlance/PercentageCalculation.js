import TrackingAtAGlanceObjects from "./TrackingAtAGlanceObjects"

class PercentageCalculation{
    percentageCheck(tileID){
        cy.get(tileID).scrollIntoView()
        cy.get(tileID+TrackingAtAGlanceObjects.nrInKpi).invoke('text').then((nr)=>{
            cy.get(tileID+TrackingAtAGlanceObjects.drInKpi).invoke('text').then((dr)=>{
                nr = nr.replace(',','')
                dr = dr.replace(',','').replace('of ','')
                let percentExpected = (nr*100/dr).toFixed(2).toString()+"%";
                if(tileID == TrackingAtAGlanceObjects.studentDevicesID){
                    percentExpected = (nr*100/dr).toFixed(0).toString()+"%";
                }
                cy.log(percentExpected)
                cy.get(tileID+TrackingAtAGlanceObjects.percentageInKpi).invoke('text').then(percent=>{
                    let percentActual = percent;
                    cy.log(percentActual)
                    expect(percentExpected).to.equal(percentActual)
                })
            })
        })
        return this
    }
    percentageCheckInAllTiles(){
        const percent = new PercentageCalculation
        percent.percentageCheck(TrackingAtAGlanceObjects.dailyInactiveStudentsID)
        percent.percentageCheck(TrackingAtAGlanceObjects.dailyActiveStudentsID)
        percent.percentageCheck(TrackingAtAGlanceObjects.devicesDistributionID)
        percent.percentageCheck(TrackingAtAGlanceObjects.applicationLoginsID)
        percent.percentageCheck(TrackingAtAGlanceObjects.activeTeachersID)
        percent.percentageCheck(TrackingAtAGlanceObjects.inactiveStudentsYtdID)
        percent.percentageCheck(TrackingAtAGlanceObjects.weeklyActiveStudentsID)
        return this 
    }
}
export default PercentageCalculation