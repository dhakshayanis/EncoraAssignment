import NavigateToPage from '../../../Applications/boston/Common/NavigateToPage'
import PeopleAndDeviceObjects from '../../../Applications/boston/PeopleAndDevice/PeopleAndDeviceObjects'
import CheckChartsValue from '../../../Applications/boston/PeopleAndDevice/ChartsValue'
import PeopleAndDeviceSanity from '../../../Applications/boston/PeopleAndDevice/PeopleAndDeviceSanity'
import TableValues from '../../../Applications/boston/PeopleAndDevice/TableValues'
import writeJSON from '../../../Applications/boston/Common/WriteJSON'

describe('People and Device Regression Test',function()
{
   it('navigate to People and Device',function()
   {
        const np = new NavigateToPage
        np.goToTrackingAtAGlancePage()
        np.goToPage(PeopleAndDeviceObjects.pageTitle)
   })
   /*it('write chart values',function(){
       const write = new writeJSON
       write.start('BpsPeopleAndDeviceChart')
       const chartsValues = new CheckChartsValue
       chartsValues.writeValuesInchart(PeopleAndDeviceObjects.districtEnrollment)
       chartsValues.writeValuesInchart(PeopleAndDeviceObjects.deviceDistribution)
       write.end('BpsPeopleAndDeviceChart')
   })
   it('read chart values and compare with total',function(){
        const prepareJSON = new CheckChartsValue
        prepareJSON.checkChartTotal(PeopleAndDeviceObjects.districtEnrollment)
        prepareJSON.checkChartTotal(PeopleAndDeviceObjects.deviceDistribution)
    })*/
    it('switch to table', function(){
        const sanity = new PeopleAndDeviceSanity
        sanity.switchTo(PeopleAndDeviceObjects.tableViewButton)
    })
    it('write table values', function(){
        const write = new writeJSON
        write.start('BpsPeopleAndDeviceStudentsTable')
        const table = new TableValues
        table.writeTableValues('BpsPeopleAndDeviceStudentsTable',1,PeopleAndDeviceObjects.districtEnrollment)
        table.writeTableValues('BpsPeopleAndDeviceStudentsTable',1,PeopleAndDeviceObjects.deviceDistribution)
        write.end('BpsPeopleAndDeviceStudentsTable')
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
        write.start('BpsPeopleAndDeviceSchoolsTable')
        const table = new TableValues
        table.writeTableValues('BpsPeopleAndDeviceSchoolsTable',1,PeopleAndDeviceObjects.districtEnrollment)
        table.writeTableValues('BpsPeopleAndDeviceSchoolsTable',1,PeopleAndDeviceObjects.deviceDistribution)
        write.end('BpsPeopleAndDeviceSchoolsTable')
    })
    it('compare table values in schools tab',function(){
        const table = new TableValues
        table.compareTableValuesWithStudentsTable('BpsPeopleAndDeviceSchoolsTable')
    })
})