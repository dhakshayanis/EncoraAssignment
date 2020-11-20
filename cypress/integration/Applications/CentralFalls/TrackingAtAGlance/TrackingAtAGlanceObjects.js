class TrackingAtAGlanceObjects{
    static pagetitle = "At a Glance"
    static SchoolDimensionDropDownID = "TG_SchoolDimension"
    static StudentDimensionDropDownID = "TG_StudentDimension"
    static SchoolDimensionDropDownName = "School Dimension"
    static StudentDimensionDropDownName = "Student Dimension"
    static schoolDimensionDropDownOptions = ['School Level', 'Grade Level']
    static StudentDimensionDropDownOptions = ['Ethnicity', 'Gender', 'Special Group', 'Student Device Assignment']
    
    static dailyInactiveStudentsID = '[id="1"]'
    static dailyActiveStudentsID = '[id="2"]'
    static devicesDistributionID = '[id="5"]'
    static applicationLoginsID = '[id="6"]'
    static activeTeachersID  = '[id="7"]'
    static inactiveStudentsYtdID = '[id="4"]'
    static weeklyActiveStudentsID ='[id="3"]'

    static nrInKpi = ' [style="color: rgb(4, 90, 181); font-size: 34px; font-weight: 500; line-height: 1;"]'
    static drInKpi = ' [style="color: rgb(98, 113, 129); font-size: 16px; font-weight: 500;"]'
    static percentageInKpi = ' [style*="text-align: right;"]'
    static nrInMiniKpi = ' [style*="color: rgb(4, 90, 181); font-size: 18px;"][style*="font-weight: 500; text-align: center;"]'
    static percentXpathInMiniKpi = ' [style*="color: rgb(4, 90, 181); font-weight: 500;"][style*="text-align: center;"]'
    static progressBarBlueInMainKpi = '[style="color: rgb(255, 255, 255); width: 100%;"] .class-room-tile-kpi-bar-chart-progress'
    static progressBarBlueInMiniKpi = ' [style*="border-radius: 5px;"] .class-room-tile-kpi-bar-chart-progress'
    
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
    static getTileText1(tileID){
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
    static getTileText2(tileID){
        var text2 = new Map();
        text2.set(TrackingAtAGlanceObjects.dailyInactiveStudentsID, 'No Login in Past 7 Days');
        text2.set(TrackingAtAGlanceObjects.dailyActiveStudentsID, ' Last 7 Days Avg');
        text2.set(TrackingAtAGlanceObjects.weeklyActiveStudentsID, 'Avg. Weekly Active Students');
        text2.set(TrackingAtAGlanceObjects.inactiveStudentsYtdID, '');
        text2.set(TrackingAtAGlanceObjects.devicesDistributionID, 'Devices Distributed');
        text2.set(TrackingAtAGlanceObjects.applicationLoginsID, '');
        text2.set(TrackingAtAGlanceObjects.activeTeachersID, 'Last 7 Days Avg');
        return text2.get(tileID)
    }/*
    static getPercentXpathInMiniKpi(tileID){
        var xpath = new Map();
        xpath.set(TrackingAtAGlanceObjects.dailyInactiveStudentsID, '[style="font-size: 12px; width: 100%; text-align: center; color: rgb(4, 90, 181); font-weight: 500;"]');
        xpath.set(TrackingAtAGlanceObjects.dailyActiveStudentsID, '[style="font-size: 12px; text-align: center; color: rgb(4, 90, 181); font-weight: 500;"]');
        xpath.set(TrackingAtAGlanceObjects.weeklyActiveStudentsID, '');
        xpath.set(TrackingAtAGlanceObjects.inactiveStudentsYtdID, '');
        xpath.set(TrackingAtAGlanceObjects.devicesDistributionID, '[style="font-size: 12px; width: 90px; text-align: center; margin-right: 5px; color: rgb(4, 90, 181); font-weight: 500;"]');
        xpath.set(TrackingAtAGlanceObjects.applicationLoginsID, '');
        xpath.set(TrackingAtAGlanceObjects.activeTeachersID, '');
        return title.get(tileID)
    }*/
}
export default TrackingAtAGlanceObjects