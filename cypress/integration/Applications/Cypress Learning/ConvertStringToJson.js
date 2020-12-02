import NavigationPanelVerifications from '../CentralFalls/NavigationPanel/NavigationPanelVerifications'
import TrackingAtAGlanceObjects from '../CentralFalls/TrackingAtAGlance/TrackingAtAGlanceObjects'

      describe('one',function()
      {
      
         it('read one',function()
         {
             NavigationPanelVerifications.getJson(TrackingAtAGlanceObjects.pagetitle,'Default','Default')
             NavigationPanelVerifications.getJson(TrackingAtAGlanceObjects.pagetitle,'School year','2020')
             NavigationPanelVerifications.getJson(TrackingAtAGlanceObjects.pagetitle,'nps','success')
             
        })
         it('read one',function()
         {
         var obj  = {googl : { }};
         Object.assign(obj['googl'], {"1":"aa", "2":"bb"})
         cy.log(obj)
         })
        })