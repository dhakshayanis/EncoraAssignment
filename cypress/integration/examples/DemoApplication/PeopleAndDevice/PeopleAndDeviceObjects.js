import PeopleAndDeviceSanity from "./PeopleAndDeviceSanity"

class PeopleAndDeviceObjects{

    static chartComponent ='.open #BASIC_CONTAINER:nth-of-type'
    static districtEnrollemnt ='District Enrollment'
    static deviceDistribution = 'Device Distribution'
    static tableViewButton = 'Table View'
    static schoolsDistrictChartcomponent =  'Students With One Laptop'
    static studentsTab = 'Students'
    static schoolsTab ='Schools / District'
    static districtEnrollmentDropdownName ='View by'
    static deviceDistributionDropdownName ='View by'
    static districtEnrollmentDropdownOptions = ['Ethnicity','Gender','Grade','Special Group']
    static deviceDistributionDropdownOptions = ['Ethnicity','Gender','Grade','Special Group']

    static getID(chartComponent){
        var id = new Map();
        id.set(PeopleAndDeviceObjects.districtEnrollemnt, 1);
        id.set(PeopleAndDeviceObjects.deviceDistribution, 2);
        id.set(PeopleAndDeviceObjects.schoolsDistrictChartcomponent, 1);
        return id.get(chartComponent)
    }
}
export default PeopleAndDeviceObjects