import NavigateToPage from '../../../Applications/DemoApplication/Common/NavigateToPage'
import KPI from '../../../Applications/DemoApplication/UsageAnalysis/bars'
import UsageAnalysisObjects from '../../../Applications/DemoApplication/UsageAnalysis/UsageAnalysisObjects'
import writeJSON from '../../../Applications/DemoApplication/Common/WriteJSON'

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
        const write = new writeJson
        write.start('UsageAnalysisKpis')
        kpi.getTextInAllBars(UsageAnalysisObjects.studentBoxName)
   })
   it('bar names',function()
   {
        const kpi = new KPI
        kpi.getTextInAllBars(UsageAnalysisObjects.teacherBoxName)
   })
   
   
})