import NavigateToPage from './examples/DemoApplication/NavigateToPage'
import PageHeader from './examples/DemoApplication/PageHeader'
import MapView from './examples/DemoApplication/UsageAnalysis/MapView'
import PeopleAndDeviceSanity from './examples/DemoApplication/PeopleAndDevice/PeopleAndDeviceSanity'
import PeopleAndDeviceObjects from './examples/DemoApplication/PeopleAndDevice/PeopleAndDeviceObjects'
import Table from './examples/DemoApplication/Table'
import dropdown from './examples/DemoApplication/DropDown'

describe('People and Device Sanity Test',function()
{
    beforeEach(function(){
        cy.fixture('PageTitles').then(function(data){
            this.data = data
        })
    })
   it('navigate to People and Device',function()
   {
        const np = new NavigateToPage
        np.goToTrackingAtAGlancePage()
        np.goToPage(this.data.PeopleAndDeviceTitle)
   })/*
   it('verify page header and footer ',function()
   {
        const header = new PageHeader
        header.pageHeaderCheck()
        header.pageFooterCheck()
   })
   it('map sanity',function()
   {
       const sanity = new MapView
       sanity.sanity()
   })
   it('table sanity',function()
   {
       const sanity = new PeopleAndDeviceSanity
       sanity.switchTo(PeopleAndDeviceObjects.tableViewButton)
       const tableSanity = new Table
       tableSanity.isTableVisible()
   })
   it('District Enrollment sanity',function()
   {
       const sanity = new PeopleAndDeviceSanity
       sanity.sanity(PeopleAndDeviceObjects.districtEnrollment)
   })
   it('Device Distribution sanity',function()
   {
       const sanity = new PeopleAndDeviceSanity
       sanity.sanity(PeopleAndDeviceObjects.deviceDistribution)
   })*/
   it('Dropdown sanity',function()
   {
       const dd = new dropdown
       dd.dropDownSanity(PeopleAndDeviceObjects.districtEnrollment)
       dd.dropDownSanity(PeopleAndDeviceObjects.deviceDistribution)
   })
   it('Sanity checks after dropdown change',function()
   {
       const sanity = new PeopleAndDeviceSanity
       sanity.verifyComponentSanityOnChangingDropdown(PeopleAndDeviceObjects.districtEnrollment)
       sanity.verifyComponentSanityOnChangingDropdown(PeopleAndDeviceObjects.deviceDistribution)
   })/*
   it('Schools Tab Chart and table sanity',function()
   {
       const sanity = new PeopleAndDeviceSanity
       sanity.sanity(PeopleAndDeviceObjects.schoolsDistrictChartcomponent)
       const tableSanity = new Table
       tableSanity.isTableVisible()
   })*/

})