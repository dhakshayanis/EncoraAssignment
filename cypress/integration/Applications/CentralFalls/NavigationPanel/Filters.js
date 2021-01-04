class Filters{
    static filterSectionAtAGlance = ['Time Filter', 'School Filter', 'Student Filter']
    static SchoolYearOptions =['2020','2021']
    static SchoolTypeOptions =['All', 'Central Falls Tuitioned', 'Elementary School', 'High School' ,'Middle School']
    static SchoolNameOptions =['All', 'Calcutt Middle School','Captain Hunt Early Learning Ce','Central Falls High School',
                'Central Falls Tuitioned','Ella Risk Elementary','Raices Dual Language Academy','Veterans Memorial Elementary']
    static GradeOptions =['All','PK','PK3','PK4','PK5','KinderGarten','First Grade', 'Second Grade','Third Grade','Fourth Grade',
                'Fifth Grade','Sixth Grade','Seventh Grade','Eighth Grade','Ninth Grade','Tenth Grade','Eleventh Grade',
                'Twelfth Grade']
    static EthnicityOptions =['All','American Indian or Alaskan Native','Asian','Black or African American','Multiracial',
                'Native Hawaiian or Other Pacific Islander','White']
    static GenderOptions =['All', 'Female','Male']
    static StudentDeviceAssignmentOptions =['All','With Device','Without Device']
    static schoolYear = 'School Year'
    static schoolType = 'School Type'
    static schoolName = 'School Name'
    static grade = 'Grade'
    static ethnicity = 'Ethnicity'
    static gender = 'Gender'
    static studentDeviceAssignment = 'Student Device Assignment'
    static specialGroup = "Special Group"

    static filtersInAtaGlance=[Filters.schoolYear,Filters.schoolType,Filters.schoolName,Filters.grade,
        Filters.specialGroup,Filters.ethnicity,Filters.gender,Filters.studentDeviceAssignment]
    static filtersInPeopleandDevice=[Filters.schoolYear,Filters.schoolType,Filters.schoolName,Filters.grade,
            Filters.ethnicity,Filters.gender,Filters.studentDeviceAssignment]
    static filtersInUsageAnalysis=[Filters.schoolYear,Filters.schoolType,Filters.schoolName,Filters.grade,
            Filters.ethnicity,Filters.gender,Filters.studentDeviceAssignment]
    static filtersInEdTechOverview=[Filters.schoolYear,Filters.schoolType,Filters.schoolName,Filters.grade,
            Filters.ethnicity,Filters.gender,Filters.studentDeviceAssignment]
}
export default Filters