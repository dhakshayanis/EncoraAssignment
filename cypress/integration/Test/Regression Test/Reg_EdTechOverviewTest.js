import NavigateToPage from './examples/DemoApplication/NavigateToPage'
import PageHeader from './examples/DemoApplication/PageHeader'
import PopUp from '../../Applications/DemoApplication/EdTechOverview/PopUp'
import Dropdown from './examples/DemoApplication/DropDown'
import EOPopUpObjects from '../../Applications/DemoApplication/EdTechOverview/PopUpObjects'
import EdTechOverviewObjects from '../../Applications/DemoApplication/EdTechOverview/EdTechOverviewObjects'
describe('one',function()
{
   it('navigate to EdTechOverview',function()
   {
    const np = new NavigateToPage
    np.goToTrackingAtAGlancePage()
    np.goToPage(EdTechOverviewObjects.pageTitle)
   })
})
   