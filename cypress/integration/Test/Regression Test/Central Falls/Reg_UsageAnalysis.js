import NavigateToPage from '../../../Applications/CentralFalls/Common/NavigateToPage'
import KPI from '../../../Applications/CentralFalls/UsageAnalysis/bars'
import UsageAnalysisObjects from '../../../Applications/CentralFalls/UsageAnalysis/UsageAnalysisObjects'
import writeJSON from '../../../Applications/CentralFalls/Common/WriteJSON'
import goToTab from '../../../Applications/CentralFalls/UsageAnalysis/GoToTab'
import UsageVsAtAGlance from '../../../Applications/CentralFalls/UsageAnalysis/UsageVsAtAGlance'
import CheckPercentageSum from '../../../Applications/CentralFalls/UsageAnalysis/CheckPercentageSum'

describe('Usage Analysisn Regression Test',function()
{/*
   it('navigate to Usage',function()
   {
       const np = new NavigateToPage
       np.goToTrackingAtAGlancePage()
       np.goToPage(UsageAnalysisObjects.pageTitle)
   })
   it('bar names',function()
   {
       const kpi = new KPI
       const write = new writeJSON
       write.start('CfsUsageAnalysisKpis')
       kpi.getTextInAllBars(UsageAnalysisObjects.studentBoxName)
   })
   it('bar names',function()
   {
       const kpi = new KPI
       const write = new writeJSON
       kpi.getTextInAllBars(UsageAnalysisObjects.teacherBoxName)
       write.end('CfsUsageAnalysisKpis')
   })
   it('verify bar names', function()
   {
       const kpi = new KPI
       kpi.checkBarNames(UsageAnalysisObjects.studentBoxName)
   })
   it('verify bar names', function()
   {
       const kpi = new KPI
       kpi.checkBarNames(UsageAnalysisObjects.teacherBoxName)
   })
   it('verify tabs names', function()
   {
       const tab = new goToTab
       tab.verifyTabsInEachBars(UsageAnalysisObjects.studentBoxName)
   })
   it('verify tabs names', function()
   {
       const tab = new goToTab
       tab.verifyTabsInEachBars(UsageAnalysisObjects.teacherBoxName)
   })
   it('verify tabs text in students', function()
   {
       const tab = new goToTab
       tab.verifyTextInTabForAllKpis(UsageAnalysisObjects.studentBoxName)
   })
   it('verify tabs text in teachers', function()
   {
       const tab = new goToTab
       tab.verifyTextInTabForAllKpis(UsageAnalysisObjects.teacherBoxName)
   })*/
   it('compare usage and at a glance', function()
   {
       const compare = new UsageVsAtAGlance
       compare.verifyStudentsActive()
       compare.verifyStudentsInactive()
       compare.verifyStudentsInactiveYTD()
       compare.verifyStudentsAverageNumberOfAppsAccessed()
       compare.verifyStudentsNoLogonFor7Days()
       compare.verifyStudentsWeeklyActive()
       compare.verifyTeachersActive()
   })
   it('check percentage sum', function()
   {
       const sum = new CheckPercentageSum
        sum.percentageCheckIn(UsageAnalysisObjects.studentBoxName)
        sum.percentageCheckIn(UsageAnalysisObjects.teacherBoxName)
   })
})