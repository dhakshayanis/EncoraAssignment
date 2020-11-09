import NavigateToPage from '../../../Applications/Dallas/Common/NavigateToPage'
import PageHeader from '../../../Applications/Dallas/Common/PageHeader'
import studentLearningSanity from '../../../Applications/Dallas/StudentLearning/StudentLearningSanity'
import StudentLearningObjects from '../../../Applications/Dallas/StudentLearning/StudentLearningObjects'
import DateFilter from '../../../Applications/Dallas/Common/DateFilter'

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
   it('date filter',function()
   {
       const date = new DateFilter
       date.startDateDefault()
       date.endDateDefault()
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