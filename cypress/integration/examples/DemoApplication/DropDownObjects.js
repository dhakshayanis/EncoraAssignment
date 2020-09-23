import TrackingAtAGlanceObjects from './TrackingAtAGlance/TrackingAtAGlanceObjects'
import TimeSeries from './UsageAnalysis/TimeSeries'
import EOPopUpObjects from './EdTechOverview/PopUpObjects';
import PeopleAndDeviceObjects from './PeopleAndDevice/PeopleAndDeviceObjects';

class DropDownObjects{
    getDropDownOptions(dropDownName){
        var options = new Map();
        //tracking at a galnce
        options.set(TrackingAtAGlanceObjects.SchoolDimensionDropDownID, TrackingAtAGlanceObjects.schoolDimensionDropDownOptions);
        options.set(TrackingAtAGlanceObjects.StudentDimensionDropDownID, TrackingAtAGlanceObjects.StudentDimensionDropDownOptions);
        //People and device
        options.set(PeopleAndDeviceObjects.deviceDistribution, PeopleAndDeviceObjects.deviceDistributionDropdownOptions);
        options.set(PeopleAndDeviceObjects.districtEnrollment, PeopleAndDeviceObjects.districtEnrollmentDropdownOptions);
        //Usage Analysis 
        options.set(TimeSeries.timeSeriesChartDropDownID, TimeSeries.timeSeriesDropDownOptions);
        //Edtech Overview
        options.set(EOPopUpObjects.studentDimensionDropDownID, EOPopUpObjects.studentDimensionDropDownOptions);
        return options.get(dropDownName)
    }
    getDropDownName(dropDownName){
        var name = new Map();
        name.set(TrackingAtAGlanceObjects.SchoolDimensionDropDownID, TrackingAtAGlanceObjects.SchoolDimensionDropDownName);
        name.set(TrackingAtAGlanceObjects.StudentDimensionDropDownID, TrackingAtAGlanceObjects.StudentDimensionDropDownName);
        //People and device
        name.set(PeopleAndDeviceObjects.deviceDistribution, PeopleAndDeviceObjects.deviceDistributionDropdownName);
        name.set(PeopleAndDeviceObjects.districtEnrollment, PeopleAndDeviceObjects.districtEnrollmentDropdownName);
        //Usage Analysis
        name.set(TimeSeries.timeSeriesChartDropDownID, TimeSeries.timeSeriesDropDownName);
        //Edtech Overview
        name.set(EOPopUpObjects.studentDimensionDropDownID, EOPopUpObjects.studentDimensionDropDownName);
        return name.get(dropDownName)
    }

}
export default DropDownObjects