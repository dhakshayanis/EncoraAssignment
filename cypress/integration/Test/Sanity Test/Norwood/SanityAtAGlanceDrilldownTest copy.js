import NavigateToPage from './examples/Norwood/NavigateToPage'
import drilldownSanity from '../../../Applications/Norwood/TrackingAtAGlance/TrackingAtAGlanceDrilldown/TrackingAtAGlanceDrilldownSanity'
import PageTitleCheck from './examples/Norwood/PageTitleCheck'

describe('At a Glance Sanity Test',function()
{
    beforeEach(function(){
        cy.fixture('PageTitles').then(function(data){
            this.data = data
        })
    })
   it('navigate to At a galnce Drilldown',function()
   {
        const dd= new drilldownSanity
        dd.drilldown()
   })

})
