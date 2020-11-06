import NavigateToPage from '../../../Applications/DemoApplication/Common/NavigateToPage'
import PageTitleCheck from '../../../Applications/DemoApplication/Common/PageTitleCheck'
import TrackingAtAGlanceObjects from '../../../Applications/DemoApplication/TrackingAtAGlance/TrackingAtAGlanceObjects'
import PercentageCalculation from '../../../Applications/DemoApplication/TrackingAtAGlance/PercentageCalculation'

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
    titleCheck.PageTitleTest(TrackingAtAGlanceObjects.pagetitle)
})
it('% check',function()
{
    const np = new PercentageCalculation
    np.percentageCheckInAllTiles()
})
})