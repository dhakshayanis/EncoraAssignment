import NavigateToPage from '../../../Applications/Sfusd/Common/NavigateToPage'
import KPI from '../../../Applications/Sfusd/UsageAnalysis/bars'
import UsageAnalysisObjects from '../../../Applications/Sfusd/UsageAnalysis/UsageAnalysisObjects'
import writeJSON from '../../../Applications/Sfusd/Common/WriteJSON'
import goToTab from '../../../Applications/Sfusd/UsageAnalysis/GoToTab'
import UsageVsAtAGlance from '../../../Applications/Sfusd/UsageAnalysis/UsageVsAtAGlance'
import CheckPercentageSum from '../../../Applications/Sfusd/UsageAnalysis/CheckPercentageSum'

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
       write.start('SfusdUsageAnalysisKpis')
       kpi.getTextInAllBars(UsageAnalysisObjects.studentBoxName)
   })
   it('bar names',function()
   {
       const kpi = new KPI
       const write = new writeJSON
       kpi.getTextInAllBars(UsageAnalysisObjects.teacherBoxName)
       write.end('SfusdUsageAnalysisKpis')
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