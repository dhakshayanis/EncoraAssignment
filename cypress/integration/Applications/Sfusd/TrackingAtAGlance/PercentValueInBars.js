import writeJSON from '../Common/WriteJSON'
import TrackingAtAGlanceObjects from './TrackingAtAGlanceObjects'

class PercentValueInBars{
    coloredValueInBarInTile(tileID){
        const write = new writeJSON
        write.startArray('SfusdTrackingAtAGlance',TrackingAtAGlanceObjects.getTileTitle(tileID)+'progressbarColoredValue')
        cy.get(tileID).within(()=>{
            cy.get(TrackingAtAGlanceObjects.progressBarBlueInMainKpi).invoke('attr','style').then((styleAttrInMainKpi)=>{
                cy.log(styleAttrInMainKpi)
                let splittedMainKpi = styleAttrInMainKpi.split(';')
                let width1 = splittedMainKpi[1]
                let coloredValue1 = width1.replace('width: ','').replace(' ','')
                write.writeValuesInArray('SfusdTrackingAtAGlance','"'+coloredValue1+'"')
                if((tileID==TrackingAtAGlanceObjects.dailyActiveStudentsID) ||(tileID == TrackingAtAGlanceObjects.dailyInactiveStudentsID)||
                 (tileID==TrackingAtAGlanceObjects.devicesDistributionID)||(tileID==TrackingAtAGlanceObjects.activeTeachersID)){
                cy.get(TrackingAtAGlanceObjects.progressBarBlueInMiniKpi).invoke('attr','style').then((styleAttrInMiniKpi)=>{
                    cy.log(styleAttrInMiniKpi)
                    let splittedMiniKpi = styleAttrInMiniKpi.split(';')
                    let width2 = splittedMiniKpi[1]
                    let coloredValue2 = width2.replace('width: ','').replace(' ','')
                    write.writeValuesInArray('SfusdTrackingAtAGlance',',"'+coloredValue2+'"')
                }) 
                }  
                write.endArray('SfusdTrackingAtAGlance')             
            })
        })
    } 
    coloredValueInBars(){
        const bar = new PercentValueInBars
        bar.coloredValueInBarInTile(TrackingAtAGlanceObjects.dailyInactiveStudentsID)
        bar.coloredValueInBarInTile(TrackingAtAGlanceObjects.dailyActiveStudentsID)
        bar.coloredValueInBarInTile(TrackingAtAGlanceObjects.devicesDistributionID)
        bar.coloredValueInBarInTile(TrackingAtAGlanceObjects.activeTeachersID)
        bar.coloredValueInBarInTile(TrackingAtAGlanceObjects.inactiveStudentsYtdID)
        bar.coloredValueInBarInTile(TrackingAtAGlanceObjects.weeklyActiveStudentsID)
        const write = new writeJSON
        write.end('SfusdTrackingAtAGlance')
    }
    verifyColoredBarValue(tileID){
        cy.readFile('./cypress/fixtures/SfusdTrackingAtAGlance.json').then((value) => {
            let tileName = TrackingAtAGlanceObjects.getTileTitle(tileID)
            let key1 = tileName+TrackingAtAGlanceObjects.getTitleText1(tileID)
            let key2 = tileName+TrackingAtAGlanceObjects.getTitleText2(tileID)
            let percent1 = (value[key1][2])
            cy.log("1"+percent1) 
           let expected1 = value[tileName+'progressbarColoredValue'][0].replace(' ','')
           if (tileID==TrackingAtAGlanceObjects.devicesDistributionID){
            expected1 =parseFloat(expected1).toFixed(0).toString()
            cy.log('0 decimals-'+ expected1)
        }
            expect(percent1).to.equal()
            if((tileID==TrackingAtAGlanceObjects.dailyActiveStudentsID) ||(tileID == TrackingAtAGlanceObjects.dailyInactiveStudentsID)||
                (tileID==TrackingAtAGlanceObjects.devicesDistributionID)||(tileID==TrackingAtAGlanceObjects.activeTeachersID)){
                let percent2 = (value[key2][2])
                let expected = value[tileName+'progressbarColoredValue'][1].replace(' ','')
                cy.log('2 decimals-'+expected)
                
               
                expect(percent2).to.equal(expected)
            
            } 
        })
    }
    verifyColoredBarValueInAllTiles(){
        const bar = new PercentValueInBars
        bar.verifyColoredBarValue(TrackingAtAGlanceObjects.dailyInactiveStudentsID)
        bar.verifyColoredBarValue(TrackingAtAGlanceObjects.dailyActiveStudentsID)
        bar.verifyColoredBarValue(TrackingAtAGlanceObjects.devicesDistributionID)
        bar.verifyColoredBarValue(TrackingAtAGlanceObjects.activeTeachersID)
        bar.verifyColoredBarValue(TrackingAtAGlanceObjects.inactiveStudentsYtdID)
        bar.verifyColoredBarValue(TrackingAtAGlanceObjects.weeklyActiveStudentsID)
    }
}
export default PercentValueInBars