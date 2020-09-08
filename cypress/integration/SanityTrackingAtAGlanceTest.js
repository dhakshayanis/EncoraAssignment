import NavigateToPage from './examples/DemoApplication/NavigateToPage'
import PageTitleCheck from './examples/DemoApplication/PageTitleCheck'
import PageHeader from './examples/DemoApplication/PageHeader'
import TrackingAtAGlanceSanity from './examples/DemoApplication/TrackingAtAGlance/TrackingAtAGlanceSanity'
import DateFilter from './examples/DemoApplication/DateFilter'
import Dropdown from './examples/DemoApplication/DropDown'
import TrackingAtAGlanceObjects from './examples/DemoApplication/TrackingAtAGlance/TrackingAtAGlanceObjects'
//import trackingAtAGlanceDropdown from './examples/DemoApplication/TrackingAtAGlance/DropDown'

describe('one',function()
{
    beforeEach(function(){
        cy.fixture('PageTitles').then(function(data){
            this.data = data
    })
})
it('navigate to Tracking At a Glance',function()
{
    const np = new NavigateToPage
    np.goToTrackingAtAGlancePage()
    const titleCheck = new PageTitleCheck
    titleCheck.PageTitleTest(this.data.TrackingAtAGlanceTitle)
})/*
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
   })*/
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