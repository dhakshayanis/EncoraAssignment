import writeJSON from '../Common/WriteJSON'
import TrackingAtAGlanceObjects from './TrackingAtAGlanceObjects'

class PercentValueInBars{
    percentValueInTile(tileID){
        const write = new writeJSON
        write.startArray('TrackingAtAGlance',TrackingAtAGlanceObjects.getTileTitle(tileID))
        cy.get(tileID).within(()=>{
            cy.get(TrackingAtAGlanceObjects.PercentValueInBars).invoke('attr','style').then(styleAttr=>{
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
}