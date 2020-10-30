import NavigateToPage from './examples/DemoApplication/NavigateToPage'
import PageHeader from './examples/DemoApplication/PageHeader'
import PopUp from './examples/DemoApplication/EdTechOverview/PopUp'
import Dropdown from './examples/DemoApplication/DropDown'
import EOPopUpObjects from './examples/DemoApplication/EdTechOverview/PopUpObjects'
describe('one',function()
{
    beforeEach(function(){
        cy.fixture('PageTitles').then(function(data){
            this.data = data
        })
    })

   it('navigate to EdTechOverview',function()
   {
    const np = new NavigateToPage
    np.goToTrackingAtAGlancePage()
    np.goToPage(this.data.EdTechOverviewTitle)
   })

   it('verify page header and footer ',function()
   {
    const header = new PageHeader
    header.pageHeaderCheck()
    header.pageFooterCheck()
   })

   it('open google meet',function()
   {
       const gm = new PopUp
       gm.openTile(this.data.EdTechOverviewGoogleMeetTile)
   })

   it('verify student Dimension View',function()
   {
       const gm = new PopUp
       gm.sanity(this.data.EdTechOverviewStudentDimension)
   })
   it('verify drop down sanity',function()
   {
       const gm = new Dropdown
       gm.dropDownSanity(EOPopUpObjects.studentDimensionDropDownID)
   })
   it('verify drop down change',function()
   {
       const gm = new PopUp
       gm.verifyComponentSanityOnChangingDropdown(EOPopUpObjects.studentDimensionDropDownID)
   })
   /*
   it('verify Meeting Information',function()
   {
       const gm = new PopUp
       gm.sanity(this.data.EdTechOverviewMeetingInformation)
   })

   it('verify meeting duration',function()
   {
       const gm = new PopUp
       gm.sanity(this.data.EdTechOverviewMeetingDuration)
   })*/

})