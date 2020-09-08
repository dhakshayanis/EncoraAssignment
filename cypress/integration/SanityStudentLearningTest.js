import NavigateToPage from './examples/DemoApplication/NavigateToPage'
import PageHeader from './examples/DemoApplication/PageHeader'
import studentLearningSanity from './examples/DemoApplication/StudentLearning/StudentLearningSanity'
import StudentLearningObjects from './examples/DemoApplication/StudentLearning/StudentLearningObjects'

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

   it('verify page header and footer ',function()
   {
        const header = new PageHeader
        header.pageHeaderCheck()
        header.pageFooterCheck()
   })

   it('google Classroom sanity',function()
   {
        const sanity = new studentLearningSanity
        sanity.sanityOfTile(StudentLearningObjects.googleClassroomAdoption)
   })

   it('popular Material Sources sanity',function()
   {
        const sanity = new studentLearningSanity
        sanity.sanityOfTile(StudentLearningObjects.popularMaterialSources)
   })

   it('assignments Per Teacher sanity',function()
   {
        const sanity = new studentLearningSanity
        sanity.sanityOfTile(StudentLearningObjects.assignmentsPerTeacher)
   })
   it('assignment Submissions sanity',function()
   {
        const sanity = new studentLearningSanity
        sanity.sanityOfTile(StudentLearningObjects.assignmentSubmissions)
   })

   it('overall grade sanity',function()
   {
        const sanity = new studentLearningSanity
        sanity.sanityOfTile(StudentLearningObjects.overallGrade)
   })
   it('elemenatryTab sanity',function()
   {
        const sanity = new studentLearningSanity
        sanity.sanityInTab(StudentLearningObjects.elementaryTab)
   })
   it('middleTab sanity',function()
   {
        const sanity = new studentLearningSanity
        sanity.sanityInTab(StudentLearningObjects.middleTab)
   })
   it('high tab sanity',function()
   {
        const sanity = new studentLearningSanity
        sanity.sanityInTab(StudentLearningObjects.highTab)
   })


})