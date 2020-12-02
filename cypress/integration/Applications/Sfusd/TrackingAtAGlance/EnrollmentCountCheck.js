import TrackingAtAGlanceObjects from './TrackingAtAGlanceObjects'

class EnrollemntCheck{
    verifyEnrollmentCountInTile(tileID){
        cy.readFile('./cypress/fixtures/SfusdTrackingAtAGlance.json').then((enroll)=>{
            let main = TrackingAtAGlanceObjects.getTileTitle(tileID) + TrackingAtAGlanceObjects.getTitleText1(tileID)
            let expected = enroll["DAILY INACTIVE STUDENTSAvg. Daily Inactive Students"][1]
            expect(enroll[main][1].replace(' ','')).to.equal(expected)
            if((tileID==TrackingAtAGlanceObjects.dailyActiveStudentsID) ||(tileID == TrackingAtAGlanceObjects.dailyInactiveStudentsID)||
                (tileID==TrackingAtAGlanceObjects.studentHotspotDistributionID)||(tileID==TrackingAtAGlanceObjects.devicesDistributionID)
                ||(tileID==TrackingAtAGlanceObjects.activeTeachersID)||(tileID==TrackingAtAGlanceObjects.studentHotspotDistributionID)){
                let mini = TrackingAtAGlanceObjects.getTileTitle(tileID) + TrackingAtAGlanceObjects.getTitleText2(tileID)
                expect(enroll[mini][0].replace(' ','')).to.equal(expected)
            }
        })
    }
    verifyEnrollmentCountInAllTiles(tileID){
        const enroll = new EnrollemntCheck
        enroll.verifyEnrollmentCountInTile(TrackingAtAGlanceObjects.dailyInactiveStudentsID)
        enroll.verifyEnrollmentCountInTile(TrackingAtAGlanceObjects.dailyActiveStudentsID)
        enroll.verifyEnrollmentCountInTile(TrackingAtAGlanceObjects.devicesDistributionID)
        enroll.verifyEnrollmentCountInTile(TrackingAtAGlanceObjects.inactiveStudentsYtdID)
        enroll.verifyEnrollmentCountInTile(TrackingAtAGlanceObjects.weeklyActiveStudentsID)
        enroll.verifyEnrollmentCountInTile(TrackingAtAGlanceObjects.weeklyInActiveStudentID)
        enroll.verifyEnrollmentCountInTile(TrackingAtAGlanceObjects.studentHotspotDistributionID)
    }
}
export default EnrollemntCheck