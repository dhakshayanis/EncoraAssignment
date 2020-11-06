import NavigateToPage from '../../../Applications/Dallas/Common/NavigateToPage'
import PageHeader from '../../../Applications/Dallas/Common/PageHeader'
import MapView from '../../../Applications/Dallas/UsageAnalysis/MapView'
import PeopleAndDeviceSanity from '../../../Applications/Dallas/PeopleAndDevice/PeopleAndDeviceSanity'
import PeopleAndDeviceObjects from '../../../Applications/Dallas/PeopleAndDevice/PeopleAndDeviceObjects'
import Table from '../../../Applications/Dallas/Common/Table'
import dropdown from '../../../Applications/Dallas/Common/DropDown'

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
    cy.scrollTo(0, 500)                   
    cy.get('#.switcher-container-content-child:nth-of-type(1)').scrollTo('bottom')
       const sanity = new PeopleAndDeviceSanity
       sanity.sanity(PeopleAndDeviceObjects.hotspotDistribution)
   })

   it('Dropdown sanity',function()
   {
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