import PeopleAndDeviceObjects from "./PeopleAndDeviceObjects";

class TableObjects{
    static nextButton = '.ant-pagination-next[aria-disabled="false"] path'// '.ant-pagination-next > a'
    static rowCount ='.ant-table-row'
    //.ant-table-row:nth-child(1)>td:nth-child(5)
    static noOfStudents="# of Students"
    static noOfDevices="Total Device Distribution"

    static getColumnNumber(columnName){
        var id = new Map();
        //tracking at a glance
        id.set(PeopleAndDeviceObjects.districtEnrollment, 5);
        id.set(PeopleAndDeviceObjects.deviceDistribution,6);
        id.set(PeopleAndDeviceObjects.hotspotDistribution, 7);
        return id.get(columnName)
    }
}
export default TableObjects