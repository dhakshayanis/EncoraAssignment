import NavigateToPage from '../../../Applications/CentralFalls/Common/NavigateToPage'
import KPI from '../../../Applications/CentralFalls/UsageAnalysis/bars'
import UsageAnalysisObjects from '../../../Applications/CentralFalls/UsageAnalysis/UsageAnalysisObjects'
import writeJSON from '../../../Applications/CentralFalls/Common/WriteJSON'
import goToTab from '../../../Applications/CentralFalls/UsageAnalysis/GoToTab'

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
       write.start('UsageAnalysisKpis')
       kpi.getTextInAllBars(UsageAnalysisObjects.studentBoxName)
   })
   it('bar names',function()
   {
       const kpi = new KPI
       const write = new writeJSON
       kpi.getTextInAllBars(UsageAnalysisObjects.teacherBoxName)
       write.end('UsageAnalysisKpis')
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
       tab.verifyTextInTabForAllKpis(UsageAnalysisObjects.teacherBoxName)
   })
   it('verify tabs text in teachers', function()
   {
       const tab = new goToTab
       tab.verifyTextInTabForAllKpis(UsageAnalysisObjects.teacherBoxName)
   })
})