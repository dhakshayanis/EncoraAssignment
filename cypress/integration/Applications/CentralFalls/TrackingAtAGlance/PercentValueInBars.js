import writeJSON from '../Common/WriteJSON'
import TrackingAtAGlanceObjects from './TrackingAtAGlanceObjects'

class PercentValueInBars{
    coloredValueInBarInTile(tileID){
        const write = new writeJSON
        write.startArray('TrackingAtAGlance',TrackingAtAGlanceObjects.getTileTitle(tileID))
        cy.get(tileID).within(()=>{
            cy.get(TrackingAtAGlanceObjects.progressBarBlue).invoke('attr','style').then(styleAttr=>{
                cy.log(styleAttr)
                let splitted = styleAttr.split(';')
                let width1 = splitted[1]
                let width2 = splitted[6]
                let coloredValue1 = width1.replace('width: ','')
                let coloredValue2 = width2.replace('width: ','')
                write.writeValuesInArray('TrackingAtAGlance',coloredValue1+' , '+coloredValue2)
                write.endArray('TrackingAtAGlance')                
            })
        })
    } 
    coloredValueInBars(){
        const bar = new PercentValueInBars
        bar.coloredValueInBarInTile(TrackingAtAGlanceObjects.dailyInactiveStudentsID)
        bar.coloredValueInBarInTile(TrackingAtAGlanceObjects.dailyActiveStudentsID)
        bar.coloredValueInBarInTile(TrackingAtAGlanceObjects.devicesDistributionID)
        bar.coloredValueInBarInTile(TrackingAtAGlanceObjects.applicationLoginsID)
        bar.coloredValueInBarInTile(TrackingAtAGlanceObjects.activeTeachersID)
        bar.coloredValueInBarInTile(TrackingAtAGlanceObjects.inactiveStudentsYtdID)
        bar.coloredValueInBarInTile(TrackingAtAGlanceObjects.weeklyActiveStudentsID)
    }
}
export default PercentValueInBars