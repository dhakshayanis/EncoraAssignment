import Filters from '../CentralFalls/NavigationPanel/Filters'
import TrackingAtAGlanceObjects from '../CentralFalls/TrackingAtAGlance/TrackingAtAGlanceObjects'


describe('one',function()
{
    
    it('check navigation filters count', function()
    {   
        let pageName = TrackingAtAGlanceObjects.pagetitle
        let page = pageName.replace(/ /g,'')
        let filtersCount = Filters['filtersIn'+page].length;
        cy.log('FiltersCount : '+filtersCount)
        for(let i=1; i<=filtersCount; i++){
            let filterName = Filters['filtersIn'+page][(i-1)].replace(/ /g,'')
            cy.log('FilterName : '+filterName)
            let options = Filters[filterName+'Options']
            cy.log('options count: '+options.length)
            for(let item=1; item<=options.length; item++){
                cy.log('ddoptionName: '+options[item-1])
            }
        }
        
    })
})