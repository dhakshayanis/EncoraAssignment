import NavigateToPage from '../../../Applications/CentralFalls/Common/NavigateToPage'
import PeopleAndDeviceObjects from '../../../Applications/CentralFalls/PeopleAndDevice/PeopleAndDeviceObjects'
import CheckChartsValue from '../../../Applications/CentralFalls/PeopleAndDevice/ChartsValue'
import PeopleAndDeviceSanity from '../../../Applications/CentralFalls/PeopleAndDevice/PeopleAndDeviceSanity'
import TableValues from '../../../Applications/CentralFalls/PeopleAndDevice/TableValues'
import writeJSON from '../../../Applications/CentralFalls/Common/WriteJSON'

describe('People and Device Regression Test',function()
{
   it('navigate to People and Device',function()
   {
        const np = new NavigateToPage
        np.goToTrackingAtAGlancePage()
        np.goToPage(PeopleAndDeviceObjects.pageTitle)
   })
   it('write chart values',function(){
       const write = new writeJSON
       write.start('CfsPeopleAndDeviceChart')
       const chartsValues = new CheckChartsValue
       chartsValues.writeValuesInchart(PeopleAndDeviceObjects.districtEnrollment)
       chartsValues.writeValuesInchart(PeopleAndDeviceObjects.deviceDistribution)
       write.end('CfsPeopleAndDeviceChart')
   })
   it('read chart values and compare with total',function(){
        const prepareJSON = new CheckChartsValue
        prepareJSON.checkChartTotal(PeopleAndDeviceObjects.districtEnrollment)
        prepareJSON.checkChartTotal(PeopleAndDeviceObjects.deviceDistribution)
    })
    it('switch to table', function(){
        const sanity = new PeopleAndDeviceSanity
        sanity.switchTo(PeopleAndDeviceObjects.tableViewButton)
    })
    it('write table values', function(){
        const write = new writeJSON
        write.start('CfsPeopleAndDeviceStudentsTable')
        const table = new TableValues
        table.writeTableValues('CfsPeopleAndDeviceStudentsTable',PeopleAndDeviceObjects.districtEnrollment)
        table.writeTableValues('CfsPeopleAndDeviceStudentsTable',PeopleAndDeviceObjects.deviceDistribution)
        write.end('CfsPeopleAndDeviceStudentsTable')
    })
    it('read table values and compare with total', function(){
        const table = new TableValues
        table.compareChartTotalWithTableTotal(PeopleAndDeviceObjects.districtEnrollment)
        table.compareChartTotalWithTableTotal(PeopleAndDeviceObjects.deviceDistribution)
    })
    it('write table values in schools tab',function(){
        const sanity = new PeopleAndDeviceSanity
        sanity.goToTab(PeopleAndDeviceObjects.schoolsTab)
        const write = new writeJSON
        write.start('CfsPeopleAndDeviceSchoolsTable')
        const table = new TableValues
        table.writeTableValues('CfsPeopleAndDeviceSchoolsTable',PeopleAndDeviceObjects.districtEnrollment)
        table.writeTableValues('CfsPeopleAndDeviceSchoolsTable',PeopleAndDeviceObjects.deviceDistribution)
        write.end('CfsPeopleAndDeviceSchoolsTable')
    })
    it('compare table values in schools tab',function(){
        const table = new TableValues
        table.compareTableValuesWithStudentsTable('CfsPeopleAndDeviceSchoolsTable')
    })
})