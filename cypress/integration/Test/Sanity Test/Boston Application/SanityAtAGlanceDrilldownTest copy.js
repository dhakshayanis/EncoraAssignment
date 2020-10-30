import NavigateToPage from './examples/DemoApplication/NavigateToPage'
import drilldownSanity from '../../../Applications/DemoApplication/TrackingAtAGlance/TrackingAtAGlanceDrilldown/TrackingAtAGlanceDrilldownSanity'
import PageTitleCheck from './examples/DemoApplication/PageTitleCheck'

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
