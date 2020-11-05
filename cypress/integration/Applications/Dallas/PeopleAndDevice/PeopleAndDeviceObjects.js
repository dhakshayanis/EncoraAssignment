import PeopleAndDeviceSanity from "../PeopleAndDevice/PeopleAndDeviceSanity"

class PeopleAndDeviceObjects{
    static pageTitle ='People and Device'
    static chartComponent ='.open #BASIC_CONTAINER:nth-of-type'
    static districtEnrollment ='District Enrollment'
    static deviceDistribution = 'Device Distribution'
    static hotspotDistribution = 'Hotspot Distribution'

    static tableViewButton = 'Table View'
    static schoolsDistrictChartcomponent =  'Students With One Laptop'
    static studentsTab = 'Students'
    static schoolsTab ='Schools / District'
    static unassignedDevices ='Unassigned Devices'
    static districtEnrollmentDropdownName ='View by'
    static deviceDistributionDropdownName ='View by'
    static hotspotDistributionDropdownName ='View by'
    static districtEnrollmentDropdownOptions = ['Ethnicity','Gender','Grade','Special Group']
    static deviceDistributionDropdownOptions = ['Ethnicity','Gender','Grade','Special Group']
    static hotspotDistributionDropdownOptions = ['Ethnicity','Gender','Grade','Special Group']
    static districtEnrollmentTotal = '(//*[@class="class-room-tile-component-body-col-1"])[4]'
	static deviceDistributionTotal = '(//*[@class="class-room-tile-component-body-col-1"])[8]'
	static hotspotDistributionTotal = '(//*[@class="class-room-tile-component-body-col-1"])[12]'
    
    static districtEnrollmentChartNumbers = "((//*[@class='multiple-instance-component-row'])[1]//*[@class='class-room-tile-component-body-selected-col-3'])";
	static deviceDistributionChartNumbers= "((//*[@class='multiple-instance-component-row'])[2]//*[@class='class-room-tile-component-body-selected-col-3'])";
 	static hotspotDistributionChartNumbers = "((//*[@class='multiple-instance-component-row'])[3]//*[@class='class-room-tile-component-body-col-3'])";
 	
	
    static getID(chartComponent){
        var id = new Map();
        id.set(PeopleAndDeviceObjects.districtEnrollment, 1);
        id.set(PeopleAndDeviceObjects.deviceDistribution, 2);
        id.set(PeopleAndDeviceObjects.hotspotDistribution, 3);
        id.set(PeopleAndDeviceObjects.schoolsDistrictChartcomponent, 1);
        return id.get(chartComponent)
    }
    static getTotalXpath(chartComponent){
        var totalXpath = new Map();
        totalXpath.set(PeopleAndDeviceObjects.districtEnrollment, PeopleAndDeviceObjects.districtEnrollmentTotal);
        totalXpath.set(PeopleAndDeviceObjects.deviceDistribution, PeopleAndDeviceObjects.deviceDistributionTotal);
        totalXpath.set(PeopleAndDeviceObjects.hotspotDistribution, PeopleAndDeviceObjects.hotspotDistributionTotal);
        return totalXpath.get(chartComponent)
    }
    static getValueXpath(chartComponent){
        var valueXpath = new Map();
        valueXpath.set(PeopleAndDeviceObjects.districtEnrollment, PeopleAndDeviceObjects.districtEnrollmentChartNumbers);
        valueXpath.set(PeopleAndDeviceObjects.deviceDistribution, PeopleAndDeviceObjects.deviceDistributionChartNumbers);
        valueXpath.set(PeopleAndDeviceObjects.hotspotDistribution, PeopleAndDeviceObjects.hotspotDistributionChartNumbers);
        valueXpath.set(PeopleAndDeviceObjects.schoolsDistrictChartcomponent, 1);
        return valueXpath.get(chartComponent)
    }
}
export default PeopleAndDeviceObjects