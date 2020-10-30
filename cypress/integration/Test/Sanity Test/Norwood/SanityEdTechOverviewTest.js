import NavigateToPage from '../../../Applications/Norwood/Common/NavigateToPage'
import PageHeader from '../../../Applications/Norwood/Common/PageHeader'
import PopUp from '../../../Applications/Norwood/EdTechOverview/PopUp'
import Dropdown from '../../../Applications/Norwood/Common/DropDown'
import EOPopUpObjects from '../../../Applications/Norwood/EdTechOverview/PopUpObjects'
import EdTechOverviewObjects from '../../../Applications/Norwood/EdTechOverview/EdTechOverviewObjects'

describe('one',function()
{
   it('navigate to EdTechOverview',function()
   {
        const np = new NavigateToPage
        np.goToTrackingAtAGlancePage()
        np.goToPage(EdTechOverviewObjects.pageTitle)
   })

   it('verify page header and footer ',function()
   {
    const header = new PageHeader
    header.pageHeaderCheck()
    header.pageFooterCheck()
   })

   it('open Google Meet',function()
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
   it('verify Meeting Information',function()
   {
       const gm = new PopUp
       gm.sanity(this.data.EdTechOverviewMeetingInformation)
   })

   it('verify meeting duration',function()
   {
       const gm = new PopUp
       gm.sanity(this.data.EdTechOverviewMeetingDuration)
   })

})