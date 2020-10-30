import NavigateToPage from '../../../Applications/DemoApplication/Common/NavigateToPage'
import PageHeader from '../../../Applications/DemoApplication/Common/PageHeader'
import studentLearningSanity from '../../../Applications/DemoApplication/StudentLearning/StudentLearningSanity'
import StudentLearningObjects from '../../../Applications/DemoApplication/StudentLearning/StudentLearningObjects'

describe('Student Learning Sanity Test',function()
{

   it('navigate to Student Learning',function()
   {
        const np = new NavigateToPage
        np.goToTrackingAtAGlancePage()
        np.goToPage(StudentLearningObjects.pageTitle)
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