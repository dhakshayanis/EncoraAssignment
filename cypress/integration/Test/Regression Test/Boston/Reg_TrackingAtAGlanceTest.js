import NavigateToPage from '../../../Applications/boston/Common/NavigateToPage'
import PageTitleCheck from '../../../Applications/boston/Common/PageTitleCheck'
import TrackingAtAGlanceObjects from '../../../Applications/boston/TrackingAtAGlance/TrackingAtAGlanceObjects'
import PercentageCalculation from '../../../Applications/boston/TrackingAtAGlance/PercentageCalculation'
import WriteValuesInKPIs from '../../../Applications/boston/TrackingAtAGlance/WriteVauesInAtAGlancePage'
import PercentValueInBars from '../../../Applications/boston/TrackingAtAGlance/PercentValueInBars'
import EnrollemntCheck from '../../../Applications/boston/TrackingAtAGlance/EnrollmentCountCheck'

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