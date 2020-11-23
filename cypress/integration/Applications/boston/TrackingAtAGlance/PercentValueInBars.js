import writeJSON from '../Common/WriteJSON'
import TrackingAtAGlanceObjects from './TrackingAtAGlanceObjects'

class PercentValueInBars{
    coloredValueInBarInTile(tileID){
        const write = new writeJSON
        write.startArray('TrackingAtAGlance',TrackingAtAGlanceObjects.getTileTitle(tileID))
        cy.get(tileID).within(()=>{
            cy.get(TrackingAtAGlanceObjects.progressBarBlueInMainKpi).invoke('attr','style').then((styleAttrInMainKpi)=>{
                cy.log(styleAttrInMainKpi)
                let splittedMainKpi = styleAttrInMainKpi.split(';')
                let width1 = splittedMainKpi[1]
                let coloredValue1 = width1.replace('width: ','')
                write.writeValuesInArray('TrackingAtAGlance','"'+coloredValue1+'"')
                if((tileID==TrackingAtAGlanceObjects.dailyActiveStudentsID) ||(tileID == TrackingAtAGlanceObjects.dailyInactiveStudentsID)||
                (tileID==TrackingAtAGlanceObjects.devicesDistributionID)||(tileID==TrackingAtAGlanceObjects.activeTeachersID)){
                cy.get(TrackingAtAGlanceObjects.progressBarBlueInMiniKpi).invoke('attr','style').then((styleAttrInMiniKpi)=>{
                    cy.log(styleAttrInMiniKpi)
                    let splittedMiniKpi = styleAttrInMiniKpi.split(';')
                    let width2 = splittedMiniKpi[1]
                    let coloredValue2 = width2.replace('width: ','')
                    write.writeValuesInArray('TrackingAtAGlance',',"'+coloredValue2+'"')
                }) 
                }  
                write.endArray('TrackingAtAGlance')             
            })
        })
    } 
    coloredValueInBars(){
        const bar = new PercentValueInBars
        bar.coloredValueInBarInTile(TrackingAtAGlanceObjects.dailyInactiveStudentsID)
        bar.coloredValueInBarInTile(TrackingAtAGlanceObjects.dailyActiveStudentsID)
        bar.coloredValueInBarInTile(TrackingAtAGlanceObjects.devicesDistributionID)
        //bar.coloredValueInBarInTile(TrackingAtAGlanceObjects.applicationLoginsID)
        bar.coloredValueInBarInTile(TrackingAtAGlanceObjects.activeTeachersID)
        bar.coloredValueInBarInTile(TrackingAtAGlanceObjects.inactiveStudentsYtdID)
        bar.coloredValueInBarInTile(TrackingAtAGlanceObjects.weeklyActiveStudentsID)
    }
}
export default PercentValueInBars