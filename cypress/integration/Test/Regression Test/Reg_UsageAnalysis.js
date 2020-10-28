import NavigateToPage from './examples/DemoApplication/NavigateToPage'
import KPI from '../integration/examples/DemoApplication/UsageAnalysis/bars'

import writeJSON from './examples/DemoApplication/WriteJSON'

describe('Usage Analysisn Regression Test',function()
{
   it('navigate to Usage',function()
   {
        const np = new NavigateToPage
        np.goToTrackingAtAGlancePage()
        np.goToPage(KPI.title)
   })
   it('bar names',function()
   {
        const kpi = new KPI
        kpi.getTextInAllBars('//*[@id="EXTERNAL_GENERIC_COMPONENT"][2]')
   })
   it('bar names',function()
   {
        const kpi = new KPI
        kpi.getTextInAllBars('//*[@id="EXTERNAL_GENERIC_COMPONENT"][3]')
   })
   
   
})