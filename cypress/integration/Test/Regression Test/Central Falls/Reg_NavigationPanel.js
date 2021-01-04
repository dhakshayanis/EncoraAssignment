import FiltersDisplayedInAPage from '../../../Applications/CentralFalls/Common/FiltersDisplayedInPage'
import NavigateToPage from '../../../Applications/CentralFalls/Common/NavigateToPage'
import PageTitleCheck from '../../../Applications/CentralFalls/Common/PageTitleCheck'
import NavigationPanel from '../../../Applications/CentralFalls/NavigationPanel/NavigationPanel'
import TrackingAtAGlanceObjects from '../../../Applications/CentralFalls/TrackingAtAGlance/TrackingAtAGlanceObjects'
import PeopleAndDeviceObjects from '../../../Applications/CentralFalls/PeopleAndDevice/PeopleAndDeviceObjects'
import UsageAnalysisObjects from '../../../Applications/CentralFalls/UsageAnalysis/UsageAnalysisObjects'
import EdTechOverviewObjects from '../../../Applications/CentralFalls/EdTechOverview/EdTechOverviewObjects'

describe('one',function()
{   
    it('navigate to Tracking At a Glance',function()
    {   
        const np = new NavigateToPage
        np.goToTrackingAtAGlancePage()
        const titleCheck = new PageTitleCheck
        titleCheck.PageTitleTest(TrackingAtAGlanceObjects.pagetitle)    
    })/*

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
    })*/

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

    it('check navigation filters count - people and devices', function()
    {   
        const np = new NavigationPanel
        np.checkNumberOfDropdowns(PeopleAndDeviceObjects.pagetitle)
        np.checkDropdowns(PeopleAndDeviceObjects.pageTitle)
    })

    it('check navigation filters dropdown options - people and devices', function()
    {   
        const np = new NavigationPanel
        np.checkDropdownOption(PeopleAndDeviceObjects.pageTitle)
    })

    it('default filters in people and devices', function()
    {   
        const np = new FiltersDisplayedInAPage
        np.verifyDefaultFilters(PeopleAndDeviceObjects.pageTitle)
    })*/
    it('apply filters in people and devices page', function()
    {   
        const np = new NavigationPanel
        np.applyFilters(PeopleAndDeviceObjects.pagetitle)
    })
    
    it('navigate to Usage Analysis',function()
   {
        const np = new NavigateToPage
        np.goToTrackingAtAGlancePage()
        np.goToPage(UsageAnalysisObjects.pagetitle)
   })

    it('check navigation filters count -usage analysis', function()
    {   
        const np = new NavigationPanel
        np.checkNumberOfDropdowns(UsageAnalysisObjects.pagetitle)
        np.checkDropdowns(UsageAnalysisObjects.pageTitle)
    })

    it('check navigation filters dropdown options - usage analysis', function()
    {   
        const np = new NavigationPanel
        np.checkDropdownOption(UsageAnalysisObjects.pageTitle)
    })

    it('default filters in at a glance page- usage analysis', function()
    {   
        const np = new FiltersDisplayedInAPage
        np.verifyDefaultFilters(UsageAnalysisObjects.pageTitle)
    })
    it('apply filters in usage analysis page', function()
    {   
        const np = new NavigationPanel
        np.applyFilters(UsageAnalysisObjects.pagetitle)
    })
    
    it('navigate to edtech page',function()
   {
        const np = new NavigateToPage
        np.goToTrackingAtAGlancePage()
        np.goToPage(EdTechOverviewObjects.pageTitle)
   })

    it('check navigation filters count - edtech', function()
    {   
        const np = new NavigationPanel
        np.checkNumberOfDropdowns(EdTechOverviewObjects.pagetitle)
        np.checkDropdowns(EdTechOverviewObjects.pageTitle)
    })

    it('check navigation filters dropdown options - edtech', function()
    {   
        const np = new NavigationPanel
        np.checkDropdownOption(EdTechOverviewObjects.pageTitle)
    })

    it('default filters in at a glance page- edtech', function()
    {   
        const np = new FiltersDisplayedInAPage
        np.verifyDefaultFilters(EdTechOverviewObjects.pageTitle)
    })
    it('apply filters in edtech page page', function()
    {   
        const np = new NavigationPanel
        np.applyFilters(EdTechOverviewObjects.pagetitle)
    })

})
