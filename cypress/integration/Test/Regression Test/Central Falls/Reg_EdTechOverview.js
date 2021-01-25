import EdTechOverviewObjects from '../../../Applications/CentralFalls/EdTechOverview/EdTechOverviewObjects'
import edtech from '../../../Applications/CentralFalls/EdTechOverview/edtech'
import NavigateToPage from '../../../Applications/CentralFalls/Common/NavigateToPage'

describe('one',function()
{
   it('navigate to EdTechOverview',function()
   {
        const np = new NavigateToPage
        np.goToTrackingAtAGlancePage()
        np.goToPage(EdTechOverviewObjects.pageTitle)
   })
   it('navigate to EdTechOverview',function()
   {
       const et = new edtech
        et.verifytiles()
        et.verifytimetrending()
   })
})