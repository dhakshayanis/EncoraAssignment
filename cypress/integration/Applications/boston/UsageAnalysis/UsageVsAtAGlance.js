class UsageVsAtAGlance{
    verifyStudentsInactive(){
        cy.readFile('./cypress/fixtures/BpsTrackingAtAGlance.json').then((glance)=>{
            let expected = glance["DAILY INACTIVE STUDENTSAvg. Daily Inactive Students"][2]
            cy.readFile('./cypress/fixtures/BpsUsageAnalysisStudentskpis.json').then((usage)=>{
                let actual = usage["Avg # of Students InActive"]
                expect(actual).to.equal(actual)
            })
        })
    }
    verifyStudentsActive(){
        cy.readFile('./cypress/fixtures/BpsTrackingAtAGlance.json').then((glance)=>{
            let expected = glance["DAILY ACTIVE STUDENTSAvg. Daily Active Students"][2]
            cy.readFile('./cypress/fixtures/BpsUsageAnalysisStudentskpis.json').then((usage)=>{
                let actual = usage["Avg # of Students Active"]
                expect(actual).to.equal(actual)
            })
        })
    }
    verifyStudentsAverageNumberOfAppsAccessed(){
        cy.readFile('./cypress/fixtures/BpsTrackingAtAGlance.json').then((glance)=>{
            let expected = glance["APPLICATION LOGINSAverage Number of Apps Accessed per Student"][0]
            cy.readFile('./cypress/fixtures/BpsUsageAnalysisStudentskpis.json').then((usage)=>{
                let actual = usage["Average Number of Apps Accessed per Student"]
                expect(actual).to.equal(actual)
            })
        })
    }
    verifyStudentsInactiveYTD(){
        cy.readFile('./cypress/fixtures/BpsTrackingAtAGlance.json').then((glance)=>{
            let expected = glance["INACTIVE STUDENTS(YTD)Students with no login or <10% login(YTD)"][2]
            cy.readFile('./cypress/fixtures/BpsUsageAnalysisStudentskpis.json').then((usage)=>{
                let actual = usage["Inactive Students ( Student with less than 10% or No Login)"]
                expect(actual).to.equal(actual)
            })
        })
    }
    verifyStudentsWeeklyActive(){
        cy.readFile('./cypress/fixtures/BpsTrackingAtAGlance.json').then((glance)=>{
            let expected = glance["WEEKLY ACTIVE STUDENTSAvg. Weekly Active Students"][2]
            cy.readFile('./cypress/fixtures/BpsUsageAnalysisStudentskpis.json').then((usage)=>{
                let actual = usage["Avg # of Active Students (With atleast one Login for the week)"]
                expect(actual).to.equal(actual)
            })
        })
    }
    verifyStudentsNoLogonFor7Days(){
        cy.readFile('./cypress/fixtures/BpsTrackingAtAGlance.json').then((glance)=>{
            let expected = glance["DAILY ACTIVE STUDENTS Last 7 Days Avg"][2]
            cy.readFile('./cypress/fixtures/BpsUsageAnalysisStudentskpis.json').then((usage)=>{
                let actual = usage["Students With No logon for Past 7 days"]
                expect(actual).to.equal(actual)
            })
        })
    }
    verifyTeachersActive(){
        cy.readFile('./cypress/fixtures/BpsTrackingAtAGlance.json').then((glance)=>{
            let expected = glance["ACTIVETEACHERSAvg # of Teachers Active"][2]
            cy.readFile('./cypress/fixtures/BpsUsageAnalysisTeacherskpis.json').then((usage)=>{
                let actual = usage["Avg # of Teachers Active"]
                expect(actual).to.equal(actual)
            })
        })
    }

}
export default UsageVsAtAGlance