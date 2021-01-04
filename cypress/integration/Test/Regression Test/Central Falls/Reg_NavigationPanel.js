import FiltersDisplayedInAPage from '../../../Applications/CentralFalls/Common/FiltersDisplayedInPage'
import NavigateToPage from '../../../Applications/CentralFalls/Common/NavigateToPage'
import PageTitleCheck from '../../../Applications/CentralFalls/Common/PageTitleCheck'
import NavigationPanel from '../../../Applications/CentralFalls/NavigationPanel/NavigationPanel'
import TrackingAtAGlanceObjects from '../../../Applications/CentralFalls/TrackingAtAGlance/TrackingAtAGlanceObjects'
import PeopleAndDeviceObjects from '../../../Applications/CentralFalls/PeopleAndDevice/PeopleAndDeviceObjects'

describe('one',function()
{   
    it('navigate to Tracking At a Glance',function()
    {   
        const np = new NavigateToPage
        np.goToTrackingAtAGlancePage()
        const titleCheck = new PageTitleCheck
        titleCheck.PageTitleTest(TrackingAtAGlanceObjects.pagetitle)    
    })

    it('check navigation filters count in at a glance', function()
    {   
        const np = new NavigationPanel
        np.checkNumberOfDropdowns(TrackingAtAGlanceObjects.pagetitle)
        np.checkDropdowns(TrackingAtAGlanceObjects.pagetitle)
    })

    it('check navigation filters dropdown options - at a glance', function()
    {   
        const np = new NavigationPanel
        np.checkDropdownOption(TrackingAtAGlanceObjects.pagetitle)
    })

    it('default filters in at a glance page', function()
    {   
        const np = new FiltersDisplayedInAPage
        np.verifyDefaultFilters(TrackingAtAGlanceObjects.pagetitle)
    })
    it('apply filters in at a glance page', function()
    {   
        const np = new NavigationPanel
        np.applyFilters(TrackingAtAGlanceObjects.pagetitle)
    })
    /*
    it('navigate to People and Device',function()
   {
        const np = new NavigateToPage
        np.goToTrackingAtAGlancePage()
        np.goToPage(PeopleAndDeviceObjects.pageTitle)
   })

    it('check navigation filters count - at a glance', function()
    {   
        const np = new NavigationPanel
        np.checkNumberOfDropdowns(PeopleAndDeviceObjects.pagetitle)
        np.checkDropdowns(PeopleAndDeviceObjects.pageTitle)
    })

    it('check navigation filters dropdown options - at a glance', function()
    {   
        const np = new NavigationPanel
        np.checkDropdownOption(PeopleAndDeviceObjects.pageTitle)
    })

    it('default filters in at a glance page- at a glance', function()
    {   
        const np = new FiltersDisplayedInAPage
        np.verifyDefaultFilters(PeopleAndDeviceObjects.pageTitle)
    })*/

})
