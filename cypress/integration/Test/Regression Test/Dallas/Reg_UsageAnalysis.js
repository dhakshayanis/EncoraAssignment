import NavigateToPage from '../../../Applications/Dallas/Common/NavigateToPage'
import KPI from '../../../Applications/Dallas/UsageAnalysis/bars'
import UsageAnalysisObjects from '../../../Applications/Dallas/UsageAnalysis/UsageAnalysisObjects'
import writeJSON from '../../../Applications/Dallas/Common/WriteJSON'
import goToTab from '../../../Applications/Dallas/UsageAnalysis/GoToTab'
import UsageVsAtAGlance from '../../../Applications/Dallas/UsageAnalysis/UsageVsAtAGlance'
import CheckPercentageSum from '../../../Applications/Dallas/UsageAnalysis/CheckPercentageSum' 


describe('Usage Analysisn Regression Test',function()
{
   it('navigate to Usage',function()
   {
       const np = new NavigateToPage
       np.goToTrackingAtAGlancePage()
       np.goToPage(UsageAnalysisObjects.pageTitle)
   })
   it('Student Tile bar names',function()
   {
       const kpi = new KPI
       const write = new writeJSON
       write.start('DisdUsageAnalysisKpis')
       kpi.getTextInAllBars(UsageAnalysisObjects.studentBoxName)
   })
   it('Teachers Tile bar names',function()
   {
       const kpi = new KPI
       const write = new writeJSON
       kpi.getTextInAllBars(UsageAnalysisObjects.teacherBoxName)
       write.end('DisdUsageAnalysisKpis')
   })
   it('verify Students Tile bar names', function()
   {
       const kpi = new KPI
       kpi.checkBarNames(UsageAnalysisObjects.studentBoxName)
   })
   it('verify Teachers Tile bar names', function()
   {
       const kpi = new KPI
       kpi.checkBarNames(UsageAnalysisObjects.teacherBoxName)
   })
   it('verify Students tabs names', function()
   {
       const tab = new goToTab
       tab.verifyTabsInEachBars(UsageAnalysisObjects.studentBoxName)
   })
   it('verify Teachers tabs names', function()
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
   })
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