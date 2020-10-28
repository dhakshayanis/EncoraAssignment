import NavigateToPage from './examples/DemoApplication/NavigateToPage'
import PeopleAndDeviceObjects from './examples/DemoApplication/PeopleAndDevice/PeopleAndDeviceObjects'
import CheckChartsValue from './examples/DemoApplication/PeopleAndDevice/ChartsValue'
import PeopleAndDeviceSanity from './examples/DemoApplication/PeopleAndDevice/PeopleAndDeviceSanity'
import TableValues from './examples/DemoApplication/PeopleAndDevice/TableValues'
import writeJSON from './examples/DemoApplication/WriteJSON'

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
       write.start('PeopleAndDeviceChart')
       const chartsValues = new CheckChartsValue
       chartsValues.writeValuesInchart(PeopleAndDeviceObjects.districtEnrollment)
       chartsValues.writeValuesInchart(PeopleAndDeviceObjects.deviceDistribution)
       write.end('PeopleAndDeviceChart')
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
        write.start('PeopleAndDeviceStudentsTable')
        const table = new TableValues
        table.writeTableValues('PeopleAndDeviceStudentsTable',PeopleAndDeviceObjects.districtEnrollment)
        table.writeTableValues('PeopleAndDeviceStudentsTable',PeopleAndDeviceObjects.deviceDistribution)
        write.end('PeopleAndDeviceStudentsTable')
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
        write.start('PeopleAndDeviceSchoolsTable')
        const table = new TableValues
        table.writeTableValues('PeopleAndDeviceSchoolsTable',PeopleAndDeviceObjects.districtEnrollment)
        table.writeTableValues('PeopleAndDeviceSchoolsTable',PeopleAndDeviceObjects.deviceDistribution)
        write.end('PeopleAndDeviceSchoolsTable')
    })
    it('compare table values in schools tab',function(){
        const table = new TableValues
        table.compareTableValuesWithStudentsTable('PeopleAndDeviceSchoolsTable')
    })
})