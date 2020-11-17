import writeJSON from '../Common/WriteJSON'
import TrackingAtAGlanceObjects from './TrackingAtAGlanceObjects'

class WriteValuesInKPIs{
    writeAllValues(){
        const val = new WriteValuesInKPIs
        const write = new writeJSON
        write.start('TrackingAtAGlance')
        val.writeValuesInTile(TrackingAtAGlanceObjects.dailyInactiveStudentsID)
        val.writeValuesInTile(TrackingAtAGlanceObjects.dailyActiveStudentsID)
        val.writeValuesInTile(TrackingAtAGlanceObjects.weeklyActiveStudentsID)
        val.writeValuesInTile(TrackingAtAGlanceObjects.inactiveStudentsYtdID)
        val.writeValuesInTile(TrackingAtAGlanceObjects.devicesDistributionID)
        val.writeValuesInTile(TrackingAtAGlanceObjects.applicationLoginsID)
        val.writeValuesInTile(TrackingAtAGlanceObjects.activeTeachersID)
    }
    static checkIfBlank(text){
        if(text==''){
            text = "Blank"
        }
        return text
    }
    writeValuesInTile(tileID){
        const write = new writeJSON
        cy.get(tileID).scrollIntoView()
        let tileName = TrackingAtAGlanceObjects.getTileTitle(tileID)
        let mainKpiTitle = TrackingAtAGlanceObjects.getTileText1(tileID)
        let miniKpiTitle = TrackingAtAGlanceObjects.getTileText2(tileID)
        cy.get(tileID+TrackingAtAGlanceObjects.nrInKpi).invoke('text').then((nr)=>{
            cy.get(tileID+TrackingAtAGlanceObjects.drInKpi).invoke('text').then((dr)=>{
                cy.get(tileID+TrackingAtAGlanceObjects.percentageInKpi).invoke('text').then(percent=>{
                    nr = WriteValuesInKPIs.checkIfBlank(nr.replace(',',''))
                    dr = WriteValuesInKPIs.checkIfBlank(dr.replace(',','').replace('of ',''))
                    percent = WriteValuesInKPIs.checkIfBlank(percent)
                    write.startArray('TrackingAtAGlance',tileName+mainKpiTitle)
                    write.writeValuesInArray('TrackingAtAGlance','"'+nr+'" ,"'+dr+'" ,"'+percent+'"')
                    write.endArray('TrackingAtAGlance')
                })
            })
        })
        if((tileID==TrackingAtAGlanceObjects.dailyActiveStudentsID) ||(tileID == TrackingAtAGlanceObjects.dailyInactiveStudentsID)||
            (tileID==TrackingAtAGlanceObjects.devicesDistributionID)){
            cy.get(tileID+TrackingAtAGlanceObjects.nrInMiniKpi).invoke('text').then((nr)=>{
                cy.get(tileID+TrackingAtAGlanceObjects.drInKpi).invoke('text').then((dr)=>{
                    cy.get(tileID+TrackingAtAGlanceObjects.percentXpathInMiniKpi).invoke('text').then((percent)=>{
                        nr = nr.replace(',','')
                        dr = dr.replace(',','').replace('of ','')
                        //write.writeValuesInJSON('TrackingAtAGlance',tileName+miniKpiTitle,'[ '+nr+', '+dr+', '+ percent+']')
                        write.startArray('TrackingAtAGlance',tileName+miniKpiTitle)
                        write.writeValuesInArray('TrackingAtAGlance','"'+nr+'" ,"'+dr+'" ,"'+percent+'"')
                        write.endArray('TrackingAtAGlance')
                    })
                })
            })
        }
    }
}
export default WriteValuesInKPIs