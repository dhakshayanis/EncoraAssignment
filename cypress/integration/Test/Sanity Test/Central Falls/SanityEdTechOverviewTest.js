import NavigateToPage from '../../../Applications/CentralFalls/Common/NavigateToPage'
import PageHeader from '../../../Applications/CentralFalls/Common/PageHeader'
import PopUp from '../../../Applications/CentralFalls/EdTechOverview/PopUp'
import Dropdown from '../../../Applications/CentralFalls/Common/DropDown'
import EOPopUpObjects from '../../../Applications/CentralFalls/EdTechOverview/PopUpObjects'
import EdTechOverviewObjects from '../../../Applications/CentralFalls/EdTechOverview/EdTechOverviewObjects'
import DateFilter from '../../../Applications/CentralFalls/Common/DateFilter'

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
   it('verify date filters ',function()
   {
        const date = new DateFilter
        date.startDateDefault
        date.endDateDefault
   })
   it('open google meet',function()
   {
       const gm = new PopUp
       gm.openTile(EdTechOverviewObjects.googleMeet)
   })

   it('verify student Dimension View',function()
   {
       const gm = new PopUp
       gm.sanity(EOPopUpObjects.StudentDimension)
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
       gm.sanity(EOPopUpObjects.MeetingInformation)
   })

   it('verify meeting duration',function()
   {
       const gm = new PopUp
       gm.sanity(EOPopUpObjects.MeetingDuration)
   })

})