import NavigateToPage from '../../../Applications/boston/Common/NavigateToPage'
import PageHeader from '../../../Applications/boston/Common/PageHeader'
import goToTab from '../../../Applications/boston/UsageAnalysis/GoToTab'
import DimensionView from '../../../Applications/boston/UsageAnalysis/DimensionView'
import TimeSeries from '../../../Applications/boston/UsageAnalysis/TimeSeries'
import HeatMapAnalysis from '../../../Applications/boston/UsageAnalysis/HeatMapAnalysis'
import MapView from '../../../Applications/boston/UsageAnalysis/MapView'
import Table from '../../../Applications/boston/Common/Table'
import Dropdown from '../../../Applications/boston/Common/DropDown'
import DateFilter from '../../../Applications/boston/Common/DateFilter'
import UsageAnalysisObjects from '../../../Applications/boston/UsageAnalysis/UsageAnalysisObjects'


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
