import StudentLearningObjects from '../StudentLearning/StudentLearningObjects'

class studentLearningSanity{
    sanityOfTile(tileName){
        const sanity = new studentLearningSanity
        sanity.isComponentShown(sanity.getID(tileName))
        sanity.titleTest(tileName)
        sanity.subtitleTest(tileName)
        return this
    }
    getID(option){
        var id = new Map();
        id.set(StudentLearningObjects.googleClassroomAdoption, 1);
        id.set(StudentLearningObjects.popularMaterialSources, 2);
        id.set(StudentLearningObjects.assignmentsPerTeacher, 3);
        id.set(StudentLearningObjects.assignmentSubmissions, 4);
        id.set(StudentLearningObjects.overallGrade, 5);
        return id.get(option)
    }
    getSubtitle(option){
        var subtitle = new Map();
        subtitle.set(StudentLearningObjects.googleClassroomAdoption, StudentLearningObjects.googleClassroomAdoptionSubtitle);
        subtitle.set(StudentLearningObjects.popularMaterialSources, StudentLearningObjects.popularMaterialSourcesSubtitle);
        subtitle.set(StudentLearningObjects.assignmentsPerTeacher, StudentLearningObjects.assignmentsPerTeacherSubtitle);
        subtitle.set(StudentLearningObjects.assignmentSubmissions, StudentLearningObjects.assignmentSubmissionsSubtitle);
        subtitle.set(StudentLearningObjects.overallGrade, StudentLearningObjects.overallGradeSubtitle);
        return subtitle.get(option)
    }
    isComponentShown(i){
        let id = '[id=\"'+i+'\"]'
        cy.get(id).scrollIntoView()
        cy.get(id).should('be.visible')
        return this
    }
    titleTest(option){
        cy.contains(option).should('have.text',option)
        return this
    }
    subtitleTest(option){
        const sub = new studentLearningSanity
        let subtitle = sub.getSubtitle(option)
        cy.contains(subtitle).should('have.text',subtitle)
        return this
    }
    sanityInTab(tab){
        cy.contains(tab).click()
        cy.wait(5000)
        const sanity = new studentLearningSanity
        sanity.sanityOfTile(StudentLearningObjects.googleClassroomAdoption)
        sanity.sanityOfTile(StudentLearningObjects.popularMaterialSources)
        sanity.sanityOfTile(StudentLearningObjects.assignmentsPerTeacher)
        sanity.sanityOfTile(StudentLearningObjects.assignmentSubmissions)
        sanity.sanityOfTile(StudentLearningObjects.overallGrade)
        return this
    }
}
export default studentLearningSanity
