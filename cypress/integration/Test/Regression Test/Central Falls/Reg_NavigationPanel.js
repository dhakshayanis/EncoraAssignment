import NavigateToPage from '../../../Applications/CentralFalls/Common/NavigateToPage'
import PageTitleCheck from '../../../Applications/CentralFalls/Common/PageTitleCheck'
import NavigationPanel from '../../../Applications/CentralFalls/NavigationPanel/NavigationPanel'
import TrackingAtAGlanceObjects from '../../../Applications/CentralFalls/TrackingAtAGlance/TrackingAtAGlanceObjects'

describe('one',function()
{
    it('navigate to Tracking At a Glance',function()
    {   
        const np = new NavigateToPage
        np.goToTrackingAtAGlancePage()
        const titleCheck = new PageTitleCheck
        titleCheck.PageTitleTest(TrackingAtAGlanceObjects.pagetitle)    
    })

    it('check navigation filters count', function()
    {   
        const np = new NavigationPanel
        np.checkNumberOfDropdowns(TrackingAtAGlanceObjects.pagetitle)
        np.checkDropdowns(TrackingAtAGlanceObjects.pagetitle)
    })
})
