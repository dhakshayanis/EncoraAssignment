import TrackingAtAGlanceObjects from '../TrackingAtAGlance/TrackingAtAGlanceObjects'

class CompareValuesWithTrackingAtAGlance{
    compareEnroll(){
        cy.readFile('./cypress/fixtures/DisdTrackingAtAGlance.json').then((enroll1) => {
            let glance = enroll1["DAILY INACTIVE STUDENTSAvg. Daily Inactive Students"][1]
            cy.readFile('./cypress/fixtures/DisdPeopleAndDeviceChart.json').then((enroll2) => {
                let people = enroll2["District EnrollmentTotal"].replace(',','')
                expect(people).to.equal(glance)
            })
        })
    }
    compareDevice(){
        cy.readFile('./cypress/fixtures/DisdTrackingAtAGlance.json').then((device1) => {
            let glance = device1["DEVICESDISTRIBUTIONStudents With Devices"][0]
            cy.readFile('./cypress/fixtures/DisdPeopleAndDeviceChart.json').then((device2) => {
                let people = device2["Device DistributionTotal"].replace(',','')
                expect(people).to.equal(glance)
            })
        })
    }
    compareHotspot(){
        cy.readFile('./cypress/fixtures/DisdTrackingAtAGlance.json').then((hotspot1) => {
            let glance = hotspot1["HOTSPOTDISTRIBUTIONStudents With Devices"][0]
            cy.readFile('./cypress/fixtures/DisdPeopleAndDeviceChart.json').then((hotspot2) => {
                let people = hotspot2["Hotspot DistributionTotal"].replace(',','')
                expect(people).to.equal(glance)
            })
        })
    }

}
export default CompareValuesWithTrackingAtAGlance