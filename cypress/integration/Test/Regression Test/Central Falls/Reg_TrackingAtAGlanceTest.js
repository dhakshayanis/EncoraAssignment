import NavigateToPage from '../../../Applications/CentralFalls/Common/NavigateToPage'
import PageTitleCheck from '../../../Applications/CentralFalls/Common/PageTitleCheck'
import TrackingAtAGlanceObjects from '../../../Applications/CentralFalls/TrackingAtAGlance/TrackingAtAGlanceObjects'
import PercentageCalculation from '../../../Applications/CentralFalls/TrackingAtAGlance/PercentageCalculation'
import WriteValuesInKPIs from '../../../Applications/CentralFalls/TrackingAtAGlance/WriteVauesInAtAGlancePage'

describe('one',function()
{
    it('navigate to Tracking At a Glance',function()
    {
        const np = new NavigateToPage
        np.goToTrackingAtAGlancePage()
        const titleCheck = new PageTitleCheck
        titleCheck.PageTitleTest(TrackingAtAGlanceObjects.pagetitle)
    })
    it('% check',function()
    {
        const percent = new PercentageCalculation
        percent.percentageCheckInAllTiles()
    })
    it('Write values',function()
    {
        const values = new WriteValuesInKPIs
        values.writeAllValues()
    })

})