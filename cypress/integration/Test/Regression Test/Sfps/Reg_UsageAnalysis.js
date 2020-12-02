import NavigateToPage from '../../../Applications/Sfps/Common/NavigateToPage'
import KPI from '../../../Applications/sfps/UsageAnalysis/bars'
import UsageAnalysisObjects from '../../../Applications/sfps/UsageAnalysis/UsageAnalysisObjects'
import writeJSON from '../../../Applications/sfps/Common/WriteJSON'
import goToTab from '../../../Applications/sfps/UsageAnalysis/GoToTab'
import UsageVsAtAGlance from '../../../Applications/sfps/UsageAnalysis/UsageVsAtAGlance'
import CheckPercentageSum from '../../../Applications/sfps/UsageAnalysis/CheckPercentageSum'

describe('Usage Analysisn Regression Test',function()
{
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
       write.start('SfpsUsageAnalysisKpis')
       kpi.getTextInAllBars(UsageAnalysisObjects.studentBoxName)
   })
   it('bar names',function()
   {
       const kpi = new KPI
       const write = new writeJSON
       kpi.getTextInAllBars(UsageAnalysisObjects.teacherBoxName)
       write.end('SfpsUsageAnalysisKpis')
   })
   it('verify student bar names', function()
   {
       const kpi = new KPI
       kpi.checkBarNames(UsageAnalysisObjects.studentBoxName)
   })
   it('verify teacher bar names', function()
   {
       const kpi = new KPI
       kpi.checkBarNames(UsageAnalysisObjects.teacherBoxName)
   })
   it('verify student tabs names', function()
   {
       const tab = new goToTab
       tab.verifyTabsInEachBars(UsageAnalysisObjects.studentBoxName)
   })
   it('verify teacher tabs names', function()
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