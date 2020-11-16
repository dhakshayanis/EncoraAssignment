import NavigateToPage from '../../../Applications/Norwood/Common/NavigateToPage'
import PageTitleCheck from '../../../Applications/Norwood/Common/PageTitleCheck'
import TrackingAtAGlanceObjects from '../../../Applications/Norwood/TrackingAtAGlance/TrackingAtAGlanceObjects'
import PercentageCalculation from '../../../Applications/Norwood/TrackingAtAGlance/PercentageCalculation'
import WriteValuesInKPIs from '../../../Applications/Norwood/TrackingAtAGlance/WriteVauesInAtAGlancePage'
import PercentValueInBars from '../../../Applications/Norwood/TrackingAtAGlance/PercentValueInBars'

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
    it('colored value in bars', function(){
        const color = new PercentValueInBars
        color.coloredValueInBars()
    })

})