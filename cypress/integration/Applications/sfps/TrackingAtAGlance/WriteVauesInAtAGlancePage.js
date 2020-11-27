import writeJSON from '../Common/WriteJSON'
import TrackingAtAGlanceObjects from './TrackingAtAGlanceObjects' 

class WriteValuesInKPIs{
    writeAllValues(){
        const val = new WriteValuesInKPIs
        const write = new writeJSON
        write.start('SfpsTrackingAtAGlance')
        val.writeValuesInTile(TrackingAtAGlanceObjects.dailyInactiveStudentsID)
        val.writeValuesInTile(TrackingAtAGlanceObjects.dailyActiveStudentsID)
        val.writeValuesInTile(TrackingAtAGlanceObjects.weeklyActiveStudentsID)
        val.writeValuesInTile(TrackingAtAGlanceObjects.inactiveStudentsYtdID)
        val.writeValuesInTile(TrackingAtAGlanceObjects.devicesDistributionID)
        val.writeValuesInTile(TrackingAtAGlanceObjects.applicationLoginsID)
        val.writeValuesInTile(TrackingAtAGlanceObjects.activeTeachersID)
        val.writeValuesInTile(TrackingAtAGlanceObjects.studenthotspotdistributionID)
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
        let mainKpiTitle = TrackingAtAGlanceObjects.getTitleText1(tileID)
        let miniKpiTitle = TrackingAtAGlanceObjects.getTitleText2(tileID)
        cy.get(tileID+TrackingAtAGlanceObjects.nrInKpi).invoke('text').then((nr)=>{
            cy.get(tileID+TrackingAtAGlanceObjects.drInKpi).invoke('text').then((dr)=>{
                cy.get(tileID+TrackingAtAGlanceObjects.percentageInKpi).invoke('text').then(percent=>{
                    nr = WriteValuesInKPIs.checkIfBlank(nr.replace(',',''))
                    dr = WriteValuesInKPIs.checkIfBlank(dr.replace(',','').replace('of ',''))
                    percent = WriteValuesInKPIs.checkIfBlank(percent)
                    write.startArray('SfpsTrackingAtAGlance',tileName+mainKpiTitle)
                    write.writeValuesInArray('SfpsTrackingAtAGlance','"'+nr+'" ,"'+dr+'" ,"'+percent+'"')
                    write.endArray('SfpsTrackingAtAGlance')
                })
            })
        })
        if((tileID==TrackingAtAGlanceObjects.dailyActiveStudentsID) ||(tileID == TrackingAtAGlanceObjects.dailyInactiveStudentsID)||
            (tileID==TrackingAtAGlanceObjects.devicesDistributionID|| (tileID==TrackingAtAGlanceObjects.activeTeachersID))){
            cy.get(tileID+TrackingAtAGlanceObjects.nrInMiniKpi).invoke('text').then((nr)=>{
                cy.get(tileID+TrackingAtAGlanceObjects.drInKpi).invoke('text').then((dr)=>{
                    cy.get(tileID+TrackingAtAGlanceObjects.percentXpathInMiniKpi).invoke('text').then((percent)=>{
                        nr = nr.replace(',','')
                        dr = dr.replace(',','').replace('of ','')
                        write.startArray('SfpsTrackingAtAGlance',tileName+miniKpiTitle)
                        write.writeValuesInArray('SfpsTrackingAtAGlance','"'+nr+'" ,"'+dr+'" ,"'+percent+'"')
                        write.endArray('SfpsTrackingAtAGlance')
                    })
                })
            })
        }
    }
}
export default WriteValuesInKPIs