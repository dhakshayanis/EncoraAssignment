import NavigateToPage from '../../../Applications/DemoApplication/Common/NavigateToPage'
import PageHeader from '../../../Applications/DemoApplication/Common/PageHeader'
import goToTab from '../../../Applications/DemoApplication/UsageAnalysis/GoToTab'
import DimensionView from '../../../Applications/DemoApplication/UsageAnalysis/DimensionView'
import TimeSeries from '../../../Applications/DemoApplication/UsageAnalysis/TimeSeries'
import HeatMapAnalysis from '../../../Applications/DemoApplication/UsageAnalysis/HeatMapAnalysis'
import MapView from '../../../Applications/DemoApplication/UsageAnalysis/MapView'
import Table from '../../../Applications/DemoApplication/Common/Table'
import Dropdown from '../../../Applications/DemoApplication/Common/DropDown'
import KPI from '../../../Applications/DemoApplication/UsageAnalysis/bars'
import DateFilter from '../../../Applications/DemoApplication/Common/DateFilter'
import UsageAnalysisObjects from '../../../Applications/DemoApplication/UsageAnalysis/UsageAnalysisObjects'


describe('Usage Analysis Sanity Test',function()
{
   it('navigate to UsageAnalysis',function()
   {
        const np = new NavigateToPage
        np.goToTrackingAtAGlancePage()
        np.goToPage(UsageAnalysisObjects.pageTitle)
   })
   it('verify header and footer',function()
   {
        const header = new PageHeader
        header.pageHeaderCheck()
        header.pageFooterCheck()
   })
   it('verify date filters ',function()
   {
        const date = new DateFilter
        date.startDateDefault
        date.endDateDefault
   })
   it('schoolView sanity',function()
   {
       const schoolView = new goToTab
       schoolView.goToTab(UsageAnalysisObjects.UsageAnalysisSchoolView)
       const sanity = new Table
        sanity.isTableVisible()
   })

   it('mapView sanity',function()
   {
       const mapView = new goToTab
       mapView.goToTab(UsageAnalysisObjects.UsageAnalysisMapView)
       const sanity = new MapView
       sanity.sanity()
   })
   it('Dimension View sanity ',function()
   {
       const dimensionView = new goToTab
       dimensionView.goToTab(UsageAnalysisObjects.UsageAnalysisDimensionView)
       const sanity = new DimensionView
       sanity.sanity()
   })
   it('Heat Map Analysis sanity',function()
   {
       const heatMapAnalysis = new goToTab
       heatMapAnalysis.goToTab(UsageAnalysisObjects.UsageAnalysisHeatMapAnalysisView)
       const sanity = new HeatMapAnalysis
       sanity.sanity()
   })
   it('Time Series sanity',function()
   {
       const timeSeries = new goToTab
       timeSeries.goToTab(UsageAnalysisObjects.UsageAnalysisTimeSeries)
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