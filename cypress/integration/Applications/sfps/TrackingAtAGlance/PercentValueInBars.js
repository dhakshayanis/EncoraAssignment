import writeJSON from '../Common/WriteJSON'
import TrackingAtAGlanceObjects from './TrackingAtAGlanceObjects'

class PercentValueInBars{
    coloredValueInBarInTile(tileID){
        const write = new writeJSON
        write.startArray('SfpsTrackingAtAGlance',TrackingAtAGlanceObjects.getTileTitle(tileID)+'progressbarColoredValue')
        cy.get(tileID).within(()=>{
            cy.get(TrackingAtAGlanceObjects.progressBarBlueInMainKpi).invoke('attr','style').then((styleAttrInMainKpi)=>{
                cy.log(styleAttrInMainKpi)
                let splittedMainKpi = styleAttrInMainKpi.split(';')
                let width1 = splittedMainKpi[1]
                let coloredValue1 = width1.replace('width: ','').replace(' ','')
                write.writeValuesInArray('SfpsTrackingAtAGlance','"'+coloredValue1+'"')
                if((tileID==TrackingAtAGlanceObjects.dailyActiveStudentsID) ||(tileID == TrackingAtAGlanceObjects.dailyInactiveStudentsID)||
                (tileID==TrackingAtAGlanceObjects.devicesDistributionID)||(tileID==TrackingAtAGlanceObjects.activeTeachersID)){
                cy.get(TrackingAtAGlanceObjects.progressBarBlueInMiniKpi).invoke('attr','style').then((styleAttrInMiniKpi)=>{
                    cy.log(styleAttrInMiniKpi)
                    let splittedMiniKpi = styleAttrInMiniKpi.split(';')
                    let width2 = splittedMiniKpi[1]
                    let coloredValue2 = width2.replace('width: ','').replace(' ','')
                    write.writeValuesInArray('SfpsTrackingAtAGlance',',"'+coloredValue2+'"')
                }) 
                }  
                write.endArray('SfpsTrackingAtAGlance')             
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
        bar.coloredValueInBarInTile(TrackingAtAGlanceObjects.studenthotspotdistributionID)
        const write = new writeJSON
        write.end('SfpsTrackingAtAGlance')
    }
    verifyColoredBarValue(tileID){
        cy.readFile('./cypress/fixtures/SfpsTrackingAtAGlance.json').then((value) => {
            let tileName = TrackingAtAGlanceObjects.getTileTitle(tileID)
            let key1 = tileName+TrackingAtAGlanceObjects.getTitleText1(tileID)
            let key2 = tileName+TrackingAtAGlanceObjects.getTitleText2(tileID)
            let percent1 = (value[key1][2])
            cy.log("1"+percent1) 
            let expected1 = parseFloat(value[tileName+'progressbarColoredValue'][0].replace('%','')).toFixed(2)+'%'
            if((tileID==TrackingAtAGlanceObjects.devicesDistributionID)||(tileID==TrackingAtAGlanceObjects.studenthotspotdistributionID)){
                expected1 = parseFloat(value[tileName+'progressbarColoredValue'][0].replace('%','')).toFixed(0)+'%'
            }
            expect(percent1).to.equal(expected1)
            if((tileID==TrackingAtAGlanceObjects.dailyActiveStudentsID) ||(tileID == TrackingAtAGlanceObjects.dailyInactiveStudentsID)||
                (tileID==TrackingAtAGlanceObjects.devicesDistributionID)||(tileID==TrackingAtAGlanceObjects.activeTeachersID)){
                let percent2 = (value[key2][2])
                let expected2 = +parseFloat(value[tileName+'progressbarColoredValue'][1].replace('%','')).toFixed(2)+'%'
                expect(percent2).to.equal(expected2)
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
        bar.verifyColoredBarValue(TrackingAtAGlanceObjects.studenthotspotdistributionID)
    }
}
export default PercentValueInBars