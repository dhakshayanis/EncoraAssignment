import NavigateToPage from '../../../Applications/Sfusd/Common/NavigateToPage'
import PageTitleCheck from '../../../Applications/Sfusd/Common/PageTitleCheck'
import TrackingAtAGlanceObjects from '../../../Applications/Sfusd/TrackingAtAGlance/TrackingAtAGlanceObjects'
import PercentageCalculation from '../../../Applications/Sfusd/TrackingAtAGlance/PercentageCalculation'
import WriteValuesInKPIs from '../../../Applications/Sfusd/TrackingAtAGlance/WriteVauesInAtAGlancePage'
import PercentValueInBars from '../../../Applications/Sfusd/TrackingAtAGlance/PercentValueInBars'
import EnrollemntCheck from '../../../Applications/Sfusd/TrackingAtAGlance/EnrollmentCountCheck'

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
    it('Verify mini Kpi percentage values',function()
    {
        const values = new PercentageCalculation
        values.verifyPercentageInMiniKpiInAllTiles()
    })
    it('Verify percentage colored in bar',function()
    {
        const values = new PercentValueInBars
        values.verifyColoredBarValueInAllTiles()
    })
    it('Verify enrollement counts',function()
    {
        const values = new EnrollemntCheck
        values.verifyEnrollmentCountInAllTiles()
    })
})