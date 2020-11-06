import NavigateToPage from '../../../Applications/CentralFalls/Common/NavigateToPage'
import KPI from '../../../Applications/CentralFalls/UsageAnalysis/bars'
import UsageAnalysisObjects from '../../../Applications/CentralFalls/UsageAnalysis/UsageAnalysisObjects'
import writeJSON from '../../../Applications/CentralFalls/Common/WriteJSON'

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
        kpi.getTextInAllBars(UsageAnalysisObjects.teacherBoxName)
   })
   
   
})