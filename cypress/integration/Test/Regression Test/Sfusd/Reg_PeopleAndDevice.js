import NavigateToPage from '../../../Applications/Sfusd/Common/NavigateToPage'
import PeopleAndDeviceObjects from '../../../Applications/Sfusd/PeopleAndDevice/PeopleAndDeviceObjects'
import CheckChartsValue from '../../../Applications/Sfusd/PeopleAndDevice/ChartsValue'
import PeopleAndDeviceSanity from '../../../Applications/Sfusd/PeopleAndDevice/PeopleAndDeviceSanity'
import TableValues from '../../../Applications/Sfusd/PeopleAndDevice/TableValues'
import writeJSON from '../../../Applications/Sfusd/Common/WriteJSON'
import CompareValuesWithTrackingAtAGlance from '../../../Applications/Sfusd/PeopleAndDevice/CompareValuesWithTrackingAtAGlance'

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
       write.start('SfusdPeopleAndDeviceChart')
       const chartsValues = new CheckChartsValue
       chartsValues.writeValuesInchart(PeopleAndDeviceObjects.districtEnrollment)
       chartsValues.writeValuesInchart(PeopleAndDeviceObjects.deviceDistribution)
       write.end('SfusdPeopleAndDeviceChart')
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
        write.start('SfusdPeopleAndDeviceStudentsTable')
        const table = new TableValues
        table.writeTableValues('SfusdPeopleAndDeviceStudentsTable',PeopleAndDeviceObjects.districtEnrollment)
        table.writeTableValues('SfusdPeopleAndDeviceStudentsTable',PeopleAndDeviceObjects.deviceDistribution)
        write.end('SfusdPeopleAndDeviceStudentsTable')
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
        write.start('SfusdPeopleAndDeviceSchoolsTable')
        const table = new TableValues
        table.writeTableValues('SfusdPeopleAndDeviceSchoolsTable',PeopleAndDeviceObjects.districtEnrollment)
        table.writeTableValues('SfusdPeopleAndDeviceSchoolsTable',PeopleAndDeviceObjects.deviceDistribution)
        write.end('SfusdPeopleAndDeviceSchoolsTable')
    })
    it('compare table values in schools tab',function(){
        const table = new TableValues
        table.compareTableValuesWithStudentsTable('SfusdPeopleAndDeviceSchoolsTable')
    })
    it('compare at a galnce',function(){
        const compare = new CompareValuesWithTrackingAtAGlance
        compare.compareEnroll()
    })
    it('compare at a galnce',function(){
        const compare = new CompareValuesWithTrackingAtAGlance
        compare.compareDevice()
    })
})