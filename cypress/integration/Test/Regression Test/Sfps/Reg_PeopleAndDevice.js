import NavigateToPage from '../../../Applications/sfps/Common/NavigateToPage'
import PeopleAndDeviceObjects from '../../../Applications/sfps/PeopleAndDevice/PeopleAndDeviceObjects'
import CheckChartsValue from '../../../Applications/sfps/PeopleAndDevice/ChartsValue'
import PeopleAndDeviceSanity from '../../../Applications/sfps/PeopleAndDevice/PeopleAndDeviceSanity'
import TableValues from '../../../Applications/sfps/PeopleAndDevice/TableValues'
import writeJSON from '../../../Applications/sfps/Common/WriteJSON'

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
       write.start('SfpsPeopleAndDeviceChart')
       const chartsValues = new CheckChartsValue
       chartsValues.writeValuesInchart(PeopleAndDeviceObjects.districtEnrollment)
       chartsValues.writeValuesInchart(PeopleAndDeviceObjects.deviceDistribution)
       cy.get('.brintell-framework-footer-text').scrollIntoView()
       chartsValues.writeValuesInchart(PeopleAndDeviceObjects.hotspotDistribution)
       write.end('SfpsPeopleAndDeviceChart')
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
        write.start('SfpsPeopleAndDeviceStudentsTable')
        const table = new TableValues
        table.writeTableValues('SfpsPeopleAndDeviceStudentsTable',1,PeopleAndDeviceObjects.districtEnrollment)
        table.writeTableValues('SfpsPeopleAndDeviceStudentsTable',1,PeopleAndDeviceObjects.deviceDistribution)
        table.writeTableValues('SfpsPeopleAndDeviceStudentsTable',1,PeopleAndDeviceObjects.hotspotDistribution)
        write.end('SfpsPeopleAndDeviceStudentsTable')
    })
    it('read table values and compare with total', function(){
        const table = new TableValues
        table.compareChartTotalWithTableTotal(PeopleAndDeviceObjects.districtEnrollment)
        table.compareChartTotalWithTableTotal(PeopleAndDeviceObjects.deviceDistribution)
        table.compareChartTotalWithTableTotal(PeopleAndDeviceObjects.hotspotDistribution)
    })
    it('write table values in schools tab',function(){
        const sanity = new PeopleAndDeviceSanity
        sanity.goToTab(PeopleAndDeviceObjects.schoolsTab)
        const write = new writeJSON
        write.start('SfpsPeopleAndDeviceSchoolsTable')
        const table = new TableValues
        table.writeTableValues('SfpsPeopleAndDeviceSchoolsTable',1,PeopleAndDeviceObjects.districtEnrollment)
        table.writeTableValues('SfpsPeopleAndDeviceSchoolsTable',1,PeopleAndDeviceObjects.deviceDistribution)
        table.writeTableValues('SfpsPeopleAndDeviceSchoolsTable',1,PeopleAndDeviceObjects.hotspotDistribution)
        write.end('SfpsPeopleAndDeviceSchoolsTable')
    })
    it('compare table values in schools tab',function(){
        const table = new TableValues
        table.compareTableValuesWithStudentsTable('SfpsPeopleAndDeviceSchoolsTable')
        
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