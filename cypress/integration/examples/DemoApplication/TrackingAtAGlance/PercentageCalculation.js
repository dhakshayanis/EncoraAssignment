import TrackingAtAGlanceObjects from "./TrackingAtAGlanceObjects"

class PercentageCalculation{
    percentageCheck(tileID){
        cy.get(tileID).scrollIntoView()
        cy.get(tileID+' [style="color: rgb(4, 90, 181); font-size: 34px; font-weight: 500; line-height: 1;"]').invoke('text').then((nr)=>{
            cy.log(nr)
            cy.get(tileID+' [style="color: rgb(98, 113, 129); font-size: 16px; font-weight: 500;"]').invoke('text').then((dr)=>{
                cy.log(dr)
                nr = nr.replace(',','')
                dr = dr.replace(',','').replace('of ','')
                let percentExpected = Math.round(nr*100/dr);
                cy.log(percentExpected)
                cy.get(tileID+' [style="font-size: 12px; width: 20px; text-align: right; margin-right: 5px; color: rgb(4, 90, 181); font-weight: 500; margin-left: 2px;"]').invoke('text').then(percent=>{
                    let percentActual = parseInt(percent.replace('%',''));
                    cy.log(percentActual)
                    expect(percentExpected).to.equal(percentActual)
                })
            })
        })
        return this
    }
    percentageCheckInAllTiles(){
        const percent = new PercentageCalculation
        percent.percentageCheck(TrackingAtAGlanceObjects.studentNotActiveID)
        percent.percentageCheck(TrackingAtAGlanceObjects.studentActiveID)
        percent.percentageCheck(TrackingAtAGlanceObjects.studentDevicesID)
        percent.percentageCheck(TrackingAtAGlanceObjects.teacherActiveID)
        percent.percentageCheck(TrackingAtAGlanceObjects.applicationLoginsID)
        return this 
    }
}
export default PercentageCalculation