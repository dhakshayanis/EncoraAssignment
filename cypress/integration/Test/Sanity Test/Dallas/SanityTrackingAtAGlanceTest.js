import NavigateToPage from '../../../Applications/Dallas/Common/NavigateToPage'
import PageTitleCheck from '../../../Applications/Dallas/Common/PageTitleCheck'
import PageHeader from '../../../Applications/Dallas/Common/PageHeader'
import TrackingAtAGlanceSanity from '../../../Applications/Dallas/TrackingAtAGlance/TrackingAtAGlanceSanity'
import DateFilter from '../../../Applications/Dallas/Common/DateFilter'
import Dropdown from '../../../Applications/Dallas/Common/DropDown'
import TrackingAtAGlanceObjects from '../../../Applications/Dallas/TrackingAtAGlance/TrackingAtAGlanceObjects'
//import trackingAtAGlanceDropdown from './examples/DemoApplication/TrackingAtAGlance/DropDown'

describe('one',function()
{
   
it('navigate to Tracking At a Glance',function()
{
    const np = new NavigateToPage
    np.goToTrackingAtAGlancePage()
    const titleCheck = new PageTitleCheck
    titleCheck.PageTitleTest(TrackingAtAGlanceObjects.pagetitle)
})
   it('verify username in page header ',function()
   {
    const header = new PageHeader
    header.pageHeaderCheck()
   })
   it('verify all tiles are present',function()
   {
    const sanity = new TrackingAtAGlanceSanity
    sanity.isTilesPresent()
   })
   it('verify the header of all tiles',function()
   {
    const sanity = new TrackingAtAGlanceSanity
    sanity.tilesHeaderCHeck()
   })
   it('verify text in all tiles',function()
   {
    const text = new TrackingAtAGlanceSanity
    text.tilesTextCheck()
   })
   it('date filter',function()
   {
       const date = new DateFilter
       date.startDateDefault()
       date.endDateDefault()
   })
   it('dropdown sanity',function()
   {
    const dd = new Dropdown
    dd.dropDownSanity(TrackingAtAGlanceObjects.SchoolDimensionDropDownID)
    dd.dropDownSanity(TrackingAtAGlanceObjects.StudentDimensionDropDownID)

   })

   it('School Dimension dropdown',function()
   {
    const sanity = new TrackingAtAGlanceSanity
    sanity.verifyComponentSanityOnChangingDropdown(TrackingAtAGlanceObjects.SchoolDimensionDropDownID)

   })

   it('Student Dimension dropdown',function()
   {
    const sanity = new TrackingAtAGlanceSanity
    sanity.verifyComponentSanityOnChangingDropdown(TrackingAtAGlanceObjects.StudentDimensionDropDownID)

   })
})