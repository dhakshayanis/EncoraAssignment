import NavigateToPage from './examples/DemoApplication/NavigateToPage'
import PageTitleCheck from './examples/DemoApplication/PageTitleCheck'
import PageHeader from './examples/DemoApplication/PageHeader'
import TrackingAtAGlanceSanity from './examples/DemoApplication/TrackingAtAGlance/TrackingAtAGlanceSanity'
import DateFilter from './examples/DemoApplication/DateFilter'
import Dropdown from './examples/DemoApplication/DropDown'
import TrackingAtAGlanceObjects from './examples/DemoApplication/TrackingAtAGlance/TrackingAtAGlanceObjects'
import PercentageCalculation from './examples/DemoApplication/TrackingAtAGlance/PercentageCalculation'

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
})
it('% check',function()
{
    const np = new PercentageCalculation
    np.percentageCheckInAllTiles()
})
})