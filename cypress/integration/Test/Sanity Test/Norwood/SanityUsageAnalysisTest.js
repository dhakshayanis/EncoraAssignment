import NavigateToPage from '../../../Applications/Norwood/Common/NavigateToPage'
import PageHeader from '../../../Applications/Norwood/Common/PageHeader'
import goToTab from '../../../Applications/Norwood/UsageAnalysis/GoToTab'
import DimensionView from '../../../Applications/Norwood/UsageAnalysis/DimensionView'
import TimeSeries from './examples/Norwood/UsageAnalysis/TimeSeries'
import HeatMapAnalysis from '../../../Applications/Norwood/UsageAnalysis/HeatMapAnalysis'
import MapView from '../../../Applications/Norwood/UsageAnalysis/MapView'
import Table from '../../../Applications/Norwood/Common/Table'
import Dropdown from '../../../Applications/Norwood/Common/DropDown'


describe('Usage Analysis Sanity Test',function()
{
    beforeEach(function(){
        cy.fixture('PageTitles').then(function(data){
            this.data = data
        })
    })
   it('navigate to UsageAnalysis',function()
   {
        const np = new NavigateToPage
        np.goToTrackingAtAGlancePage()
        np.goToPage(this.data.UsageAnalysisTitle)
   })
   it('verify header and footer',function()
   {
        const header = new PageHeader
        header.pageHeaderCheck()
        header.pageFooterCheck()
   })
   it('schoolView sanity',function()
   {
       const schoolView = new goToTab
       schoolView.goToTab(this.data.UsageAnalysisSchoolView)
       const sanity = new Table
        sanity.isTableVisible()
   })

   it('mapView sanity',function()
   {
       const mapView = new goToTab
       mapView.goToTab(this.data.UsageAnalysisMapView)
       const sanity = new MapView
       sanity.sanity()
   })
   it('Dimension View sanity ',function()
   {
       const dimensionView = new goToTab
       dimensionView.goToTab(this.data.UsageAnalysisDimensionView)
       const sanity = new DimensionView
       sanity.sanity()
   })
   it('Heat Map Analysis sanity',function()
   {
       const heatMapAnalysis = new goToTab
       heatMapAnalysis.goToTab(this.data.UsageAnalysisHeatMapAnalysisView)
       const sanity = new HeatMapAnalysis
       sanity.sanity()
   })
   it('Time Series sanity',function()
   {
       const timeSeries = new goToTab
       timeSeries.goToTab(this.data.UsageAnalysisTimeSeries)
       const sanity = new TimeSeries
       sanity.sanity()
   })
   it('Time Series drop down sanity',function()
   {
       const dd = new Dropdown
       dd.dropDownSanity(TimeSeries.timeSeriesChartDropDownID)
   })
   it('Time Series sanity',function()
   {
       const sanity = new TimeSeries
       sanity.verifyComponentSanityOnChangingDropdown(TimeSeries.timeSeriesChartDropDownID)
   })
})