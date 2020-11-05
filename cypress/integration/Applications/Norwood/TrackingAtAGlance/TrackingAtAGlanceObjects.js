class TrackingAtAGlanceObjects{
    static pagetitle = "At a Glance"
    static SchoolDimensionDropDownID = "TG_SchoolDimension"
    static StudentDimensionDropDownID = "TG_StudentDimension"
    static SchoolDimensionDropDownName = "School Dimension"
    static StudentDimensionDropDownName = "Student Dimension"
    static schoolDimensionDropDownOptions = ['School Level', 'Grade Level']
    static StudentDimensionDropDownOptions = ['Ethnicity', 'Gender', 'Special Group', 'Student Device Assignment', 'Student Cohort']
    
    static dailyInactiveStudentsID = '[id="1"]'
    static dailyActiveStudentsID = '[id="2"]'
    static devicesDistributionID = '[id="5"]'
    static applicationLoginsID = '[id="6"]'
    static activeTeachersID  = '[id="7"]'
    static inactiveStudentsYtdID = '[id="4"]'
    static weeklyActiveStudentsID ='[id="3"]'

    static getTileTitle(tileID){
        var title = new Map();
        title.set(TrackingAtAGlanceObjects.dailyInactiveStudentsID, 'DAILY INACTIVE STUDENTS');
        title.set(TrackingAtAGlanceObjects.dailyActiveStudentsID, 'DAILY ACTIVE STUDENTS');
        title.set(TrackingAtAGlanceObjects.weeklyActiveStudentsID, 'WEEKLY ACTIVE STUDENTS');
        title.set(TrackingAtAGlanceObjects.inactiveStudentsYtdID, 'INACTIVE STUDENTS(YTD)');
        title.set(TrackingAtAGlanceObjects.devicesDistributionID, 'DEVICESDISTRIBUTION');
        title.set(TrackingAtAGlanceObjects.applicationLoginsID, 'APPLICATION LOGINS');
        title.set(TrackingAtAGlanceObjects.activeTeachersID, 'ACTIVETEACHERS');
        return title.get(tileID)
    }
    static getTitleText1(tileID){
        var text1 = new Map();
        text1.set(TrackingAtAGlanceObjects.dailyInactiveStudentsID, 'Avg. Daily Inactive Students');
        text1.set(TrackingAtAGlanceObjects.dailyActiveStudentsID, 'Avg. Daily Active Students');
        text1.set(TrackingAtAGlanceObjects.weeklyActiveStudentsID, 'Avg. Weekly Active Students');
        text1.set(TrackingAtAGlanceObjects.inactiveStudentsYtdID, 'Students with no login or <10% login(YTD)');
        text1.set(TrackingAtAGlanceObjects.devicesDistributionID, 'Students With Devices');
        text1.set(TrackingAtAGlanceObjects.applicationLoginsID, 'Average Number of Apps Accessed per Student');
        text1.set(TrackingAtAGlanceObjects.activeTeachersID, 'Avg # of Teachers Active');
        return text1.get(tileID)
    }
    static getTitleText2(tileID){
        var text2 = new Map();
        text2.set(TrackingAtAGlanceObjects.dailyInactiveStudentsID, 'No Login in Past 7 Days');
        text2.set(TrackingAtAGlanceObjects.dailyActiveStudentsID, ' Last 7 Days Avg');
        text2.set(TrackingAtAGlanceObjects.weeklyActiveStudentsID, 'Avg. Weekly Active Students');
        text2.set(TrackingAtAGlanceObjects.inactiveStudentsYtdID, '');
        text2.set(TrackingAtAGlanceObjects.devicesDistributionID, 'Devices Distributed');
        text2.set(TrackingAtAGlanceObjects.applicationLoginsID, '');
        text2.set(TrackingAtAGlanceObjects.activeTeachersID, 'Last 7 Days Avg');
        return text2.get(tileID)
    }
}
export default TrackingAtAGlanceObjects