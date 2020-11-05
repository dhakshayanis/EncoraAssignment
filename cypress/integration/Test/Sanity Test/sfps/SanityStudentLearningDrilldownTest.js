import NavigateToPage from './examples/DemoApplication/NavigateToPage'
import PageHeader from './examples/DemoApplication/PageHeader'
import studentLearningSanity from './examples/DemoApplication/StudentLearning/StudentLearningSanity'
import StudentLearningObjects from './examples/DemoApplication/StudentLearning/StudentLearningObjects'
import StudentLearningDrilldownSanity from '../integration/examples/DemoApplication/StudentLearning/StudentLearningDrilldown/StudentLearningDrilldownSanity'

describe('Student Learning Sanity Test',function()
{
    beforeEach(function(){
        cy.fixture('PageTitles').then(function(data){
            this.data = data
        })
    })

   it('navigate to Student Learning',function()
   {
        const np = new NavigateToPage
        np.goToTrackingAtAGlancePage()
        np.goToPage(this.data.StudentLearning)
   })
   it('navigate to Student Learning Drilldown',function()
   {
        const drilldown = new StudentLearningDrilldownSanity
        drilldown.drilldown(StudentLearningObjects.googleClassroomAdoption)
   })

})
