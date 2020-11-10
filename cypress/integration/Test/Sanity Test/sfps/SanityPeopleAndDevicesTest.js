import NavigateToPage from '../../../Applications/sfps/Common/NavigateToPage'
import PageHeader from '../../../Applications/sfps/Common/PageHeader'
import MapView from '../../../Applications/sfps/UsageAnalysis/MapView'
import PeopleAndDeviceSanity from '../../../Applications/sfps/PeopleAndDevice/PeopleAndDeviceSanity'
import PeopleAndDeviceObjects from '../../../Applications/sfps/PeopleAndDevice/PeopleAndDeviceObjects'
import Table from '../../../Applications/sfps/Common/Table'
import dropdown from '../../../Applications/sfps/Common/DropDown'
//import DateFilter from '../../../Applications/sfps/Common/DateFilter'

describe('People and Device Sanity Test',function()
{
   it('navigate to People and Device',function()
   {
        const np = new NavigateToPage
        np.goToTrackingAtAGlancePage()
        np.goToPage(PeopleAndDeviceObjects.pageTitle)
   })
   it('verify page header and footer ',function()
   {
        const header = new PageHeader
        header.pageHeaderCheck()
        header.pageFooterCheck()
   })
   /*it('date filter',function()
   {
       const date = new DateFilter
       date.startDateDefault()
       date.endDateDefault()
   })*/
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
   })
   it('Hotspot Distribution sanity',function()
   {
       const sanity = new PeopleAndDeviceSanity
       sanity.sanity(PeopleAndDeviceObjects.hotspotDistribution)
   })

   it('Dropdown sanity',function()
   {
    cy.get('[class=user_name]').scrollIntoView()
       const dd = new dropdown
       dd.dropDownSanity(PeopleAndDeviceObjects.districtEnrollment)
       dd.dropDownSanity(PeopleAndDeviceObjects.deviceDistribution)
       dd.dropDownSanity(PeopleAndDeviceObjects.hotspotDistribution)
   })
   it('Sanity checks after dropdown change',function()
   {
       const sanity = new PeopleAndDeviceSanity
       sanity.verifyComponentSanityOnChangingDropdown(PeopleAndDeviceObjects.districtEnrollment)
       sanity.verifyComponentSanityOnChangingDropdown(PeopleAndDeviceObjects.deviceDistribution)
       cy.get('.brintell-framework-footer-text').scrollIntoView()
       sanity.verifyComponentSanityOnChangingDropdown(PeopleAndDeviceObjects.hotspotDistribution)
   })
   it('Schools Tab Chart and table sanity',function()
   {
       const sanity = new PeopleAndDeviceSanity
       sanity.sanity(PeopleAndDeviceObjects.schoolsDistrictChartcomponent)
       const tableSanity = new Table
       tableSanity.isTableVisible()
   })


})