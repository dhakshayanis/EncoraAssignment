import NavigateToPage from '../../../Applications/Dallas/Common/NavigateToPage'
import PeopleAndDeviceObjects from '../../../Applications/Dallas/PeopleAndDevice/PeopleAndDeviceObjects'
import CheckChartsValue from '../../../Applications/Dallas/PeopleAndDevice/ChartsValue'
import PeopleAndDeviceSanity from '../../../Applications/Dallas/PeopleAndDevice/PeopleAndDeviceSanity'
import TableValues from '../../../Applications/Dallas/PeopleAndDevice/TableValues'
import writeJSON from '../../../Applications/Dallas/Common/WriteJSON'

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
       write.start('DisdPeopleAndDeviceChart')
       const chartsValues = new CheckChartsValue
       chartsValues.writeValuesInchart(PeopleAndDeviceObjects.districtEnrollment)
       chartsValues.writeValuesInchart(PeopleAndDeviceObjects.deviceDistribution)
       cy.get('.brintell-framework-footer-text').scrollIntoView()
       chartsValues.writeValuesInchart(PeopleAndDeviceObjects.hotspotDistribution)
       write.end('DisdPeopleAndDeviceChart')
   })
   it('read chart values and compare with total',function(){
        const prepareJSON = new CheckChartsValue
        prepareJSON.checkChartTotal(PeopleAndDeviceObjects.districtEnrollment)
        prepareJSON.checkChartTotal(PeopleAndDeviceObjects.deviceDistribution)
        prepareJSON.checkChartTotal(PeopleAndDeviceObjects.hotspotDistribution)
    })*/
    it('switch to table', function(){
        const sanity = new PeopleAndDeviceSanity
        sanity.switchTo(PeopleAndDeviceObjects.tableViewButton)
    })
    it('write table values', function(){
        const write = new writeJSON
        write.start('DisdPeopleAndDeviceStudentsTable')
        const table = new TableValues
        table.writeTableValues('DisdPeopleAndDeviceStudentsTable',1,PeopleAndDeviceObjects.districtEnrollment)
        //table.writeTableValues('DisdPeopleAndDeviceStudentsTable',1,PeopleAndDeviceObjects.deviceDistribution)
        //table.writeTableValues('DisdPeopleAndDeviceStudentsTable',1,PeopleAndDeviceObjects.hotspotDistribution)
        //write.end('DisdPeopleAndDeviceStudentsTable')
    })
    it('write table values', function(){
        const write = new writeJSON
        const table = new TableValues
        //table.writeTableValues('DisdPeopleAndDeviceStudentsTable',1,PeopleAndDeviceObjects.districtEnrollment)
        table.writeTableValues('DisdPeopleAndDeviceStudentsTable',1,PeopleAndDeviceObjects.deviceDistribution)
        //table.writeTableValues('DisdPeopleAndDeviceStudentsTable',1,PeopleAndDeviceObjects.hotspotDistribution)
        //write.end('DisdPeopleAndDeviceStudentsTable')
    })
    it('write table values', function(){
        const write = new writeJSON
        const table = new TableValues
        //table.writeTableValues('DisdPeopleAndDeviceStudentsTable',1,PeopleAndDeviceObjects.districtEnrollment)
        //table.writeTableValues('DisdPeopleAndDeviceStudentsTable',1,PeopleAndDeviceObjects.deviceDistribution)
        table.writeTableValues('DisdPeopleAndDeviceStudentsTable',1,PeopleAndDeviceObjects.hotspotDistribution)
        write.end('DisdPeopleAndDeviceStudentsTable')
    })
    it('read table values and compare with total', function(){
        const table = new TableValues
        table.compareTableValuesWithStudentsTable('DisdPeopleAndDeviceStudentsTable')
        //table.compareChartTotalWithTableTotal(PeopleAndDeviceObjects.districtEnrollment)
        //table.compareChartTotalWithTableTotal(PeopleAndDeviceObjects.deviceDistribution)
        //table.compareChartTotalWithTableTotal(PeopleAndDeviceObjects.hotspotDistribution)
    })
    it('write table values in schools tab',function(){
        const sanity = new PeopleAndDeviceSanity
        sanity.goToTab(PeopleAndDeviceObjects.schoolsTab)
        const write = new writeJSON
        write.start('DisdPeopleAndDeviceSchoolsTable')
        const table = new TableValues
        table.writeTableValues('DisdPeopleAndDeviceSchoolsTable',1,PeopleAndDeviceObjects.districtEnrollment)
        table.writeTableValues('DisdPeopleAndDeviceSchoolsTable',1,PeopleAndDeviceObjects.deviceDistribution)
        table.writeTableValues('DisdPeopleAndDeviceSchoolsTable',1,PeopleAndDeviceObjects.hotspotDistribution)
        write.end('DisdPeopleAndDeviceSchoolsTable')
    })
    it('compare table values in schools tab',function(){
        const table = new TableValues
        table.compareTableValuesWithStudentsTable('DisdPeopleAndDeviceSchoolsTable')
    })

    it('write table values in unassigned devices tab',function(){
        const sanity = new PeopleAndDeviceSanity
        sanity.goToTab(PeopleAndDeviceObjects.unassignedDevices)
        const write = new writeJSON
        write.start('DisdPeopleAndDeviceUnassignedTable')
        const table = new TableValues
        table.writeTableValues('DisdPeopleAndDeviceSchoolsTable',1,PeopleAndDeviceObjects.districtEnrollment)
        table.writeTableValues('DisdPeopleAndDeviceSchoolsTable',1,PeopleAndDeviceObjects.deviceDistribution)
        table.writeTableValues('DisdPeopleAndDeviceSchoolsTable',1,PeopleAndDeviceObjects.hotspotDistribution)
        write.end('DisdPeopleAndDeviceUnassignedTable')
    })
    it('write table values in unassigned devices tab',function(){
        const table = new TableValues
        table.compareTableValuesWithStudentsTable('DisdPeopleAndDeviceUnassignedTable')
        
    })
    it('compare at a galnce',function(){
        const compare = new CompareValuesWithTrackingAtAGlance
        compare.compareEnroll()
    })
    it('compare at a galnce',function(){
        const compare = new CompareValuesWithTrackingAtAGlance
        compare.compareDevice()
    })
    it('compare at a galnce',function(){
        const compare = new CompareValuesWithTrackingAtAGlance
        compare.compareHotspot()
    })
})