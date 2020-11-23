import TrackingAtAGlanceObjects from "./TrackingAtAGlanceObjects"

class PercentageCalculation{
    percentageCheck(tileID){
        cy.get(tileID).scrollIntoView()
        cy.get(tileID+TrackingAtAGlanceObjects.nrInKpi).invoke('text').then((nr)=>{
            cy.get(tileID+TrackingAtAGlanceObjects.drInKpi).invoke('text').then((dr)=>{
                nr = nr.replace(',','')
                dr = dr.replace(',','').replace('of ','')
                let percentExpected = (nr*100/dr).toFixed(2).toString()+"%";
                if(tileID == TrackingAtAGlanceObjects.devicesDistributionID){
                    percentExpected = (nr*100/dr).toFixed(0).toString()+"%";
                }
                cy.log(percentExpected)
                cy.get(tileID+TrackingAtAGlanceObjects.percentageInKpi).invoke('text').then(percent=>{
                    if(percent ==''){
                        percent = 'Infinity%'
                    }
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
    percentageCheckInMiniKpi(tileID){
        cy.readFile('./cypress/fixtures/BpsTrackingAtAGlance.json').then((value) => {
            let key = TrackingAtAGlanceObjects.getTileTitle(tileID)+TrackingAtAGlanceObjects.getTitleText2(tileID)
            let nr = parseInt(value[key][0])
            let dr = parseInt(value[key][1])
            let res = (nr*100/dr).toFixed(2).toString()+'%';
            if(tileID == TrackingAtAGlanceObjects.devicesDistributionID){
              res = (nr*100/dr).toFixed(0).toString()+"%";
            }
            expect(res).to.equal(value[key][2])
        })
    }
    verifyPercentageInMiniKpiInAllTiles(){
        const percent = new PercentageCalculation
        percent.percentageCheckInMiniKpi(TrackingAtAGlanceObjects.dailyInactiveStudentsID)
        percent.percentageCheckInMiniKpi(TrackingAtAGlanceObjects.dailyActiveStudentsID)
        percent.percentageCheckInMiniKpi(TrackingAtAGlanceObjects.devicesDistributionID)
        percent.percentageCheckInMiniKpi(TrackingAtAGlanceObjects.activeTeachersID)
    }
}
export default PercentageCalculation