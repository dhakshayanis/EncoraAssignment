import Dropdown from '../Common/DropDown'
import DropDownObjects from '../common/DropDownObjects'
import TrackingAtAGlanceObjects from './TrackingAtAGlanceObjects'

class TrackingAtAGlanceSanity{
    isTilesPresent(){/*
        cy.get('[id="10"]').should('be.visible')//student not active
        cy.get('[id="5"]').scrollIntoView()
        cy.get('[id="5"]').should('be.visible')//student  active
        cy.get('[id="4"]').scrollIntoView()
        cy.get('[id="4"]').should('be.visible')//student devices
        cy.get('[id="7"]').scrollIntoView()
        cy.get('[id="7"]').should('be.visible')//application logins
        cy.get('[id="8"]').scrollIntoView()
        cy.get('[id="8"]').should('be.visible')//teacher active 
        cy.get('[id="10"]').scrollIntoView() */
        TrackingAtAGlanceSanity.isTileVisible(TrackingAtAGlanceObjects.dailyInactiveStudentsID)
        TrackingAtAGlanceSanity.isTileVisible(TrackingAtAGlanceObjects.dailyActiveStudentsID)
        TrackingAtAGlanceSanity.isTileVisible(TrackingAtAGlanceObjects.studentDevicesID)
        TrackingAtAGlanceSanity.isTileVisible(TrackingAtAGlanceObjects.applicationLoginsID)
        TrackingAtAGlanceSanity.isTileVisible(TrackingAtAGlanceObjects.teacherActiveID)
        TrackingAtAGlanceSanity.isTileVisible(TrackingAtAGlanceObjects.inactiveStudentsID)
        TrackingAtAGlanceSanity.isTileVisible(TrackingAtAGlanceObjects.weeklyActiveStudentsID)
        return this
    }
    static isTileVisible(tileID){
        cy.get(tileID).scrollIntoView()
        cy.get(tileID).should('be.visible')//student  active
    }
    static checkTileHeader(tileID){
        cy.get(tileID).scrollIntoView()
        cy.get(tileID).within(()=>{cy.contains(TrackingAtAGlanceObjects.getTileTitle(tileID))
                                                .should('have.text',TrackingAtAGlanceObjects.getTileTitle(tileID))})
    }
    tilesHeaderCHeck(){
        /*cy.contains('INACTIVESTUDENTS').should('have.text','DAILYINACTIVESTUDENTS')
        cy.get(TrackingAtAGlanceObjects.dailyActiveStudentsID).scrollIntoView()
        cy.get(TrackingAtAGlanceObjects.dailyActiveStudentsID).within(()=>{cy.contains('DAILYACTIVESTUDENTS').should('have.text','DAILYACTIVESTUDENTS')})
        cy.get(TrackingAtAGlanceObjects.weeklyActiveStudentsID).scrollIntoView()
        cy.get(TrackingAtAGlanceObjects.weeklyActiveStudentsID).within(()=>{cy.contains('WEEKLYACTIVESTUDENTS').should('have.text','WEEKLYACTIVESTUDENTS')})
        cy.get(TrackingAtAGlanceObjects.inactiveStudentsYtdID).scrollIntoView()
        cy.get(TrackingAtAGlanceObjects.inactiveStudentsYtdID).within(()=>{cy.contains('INACTIVESTUDENTS(YTD)').should('have.text','INACTIVESTUDENTS(YTD)')})
        cy.get(TrackingAtAGlanceObjects.devicesDistributionID).scrollIntoView()
        cy.get(TrackingAtAGlanceObjects.devicesDistributionID).within(()=>{cy.contains('DEVICESDISTRIBUTION').should('have.text','DEVICESDISTRIBUTION')})*/
        TrackingAtAGlanceSanity.checkTileHeader(TrackingAtAGlanceObjects.inactiveStudentsID)
        TrackingAtAGlanceSanity.checkTileHeader(TrackingAtAGlanceObjects.dailyActiveStudentsID)
        TrackingAtAGlanceSanity.checkTileHeader(TrackingAtAGlanceObjects.weeklyActiveStudentsID)
        TrackingAtAGlanceSanity.checkTileHeader(TrackingAtAGlanceObjects.inactiveStudentsYtdID)
        TrackingAtAGlanceSanity.checkTileHeader(TrackingAtAGlanceObjects.devicesDistributionID)
        TrackingAtAGlanceSanity.checkTileHeader(TrackingAtAGlanceObjects.applicationLoginsID)
        TrackingAtAGlanceSanity.checkTileHeader(TrackingAtAGlanceObjects.activeTeachersID)
        cy.get(TrackingAtAGlanceObjects.inactiveStudentsID).scrollIntoView() 
        return this
    }
    static textCheck(tileID){
        cy.get(tileID).contains(TrackingAtAGlanceObjects.getTitleText1(tileID))
            .should('have.text',TrackingAtAGlanceObjects.getTitleText1(tileID))
        cy.get(tileID).contains(TrackingAtAGlanceObjects.getTitleText2(tileID))
            .should('have.text',TrackingAtAGlanceObjects.getTitleText2(tileID))
        
    }    
    tilesTextCheck(){/*
        cy.contains('Avg # of Inactive students').should('have.text','Avg # of Inactive students')
        cy.get('[id="10"]').contains('Last 7 Days Avg').should('have.text','Last 7 Days Avg')
        cy.contains('Avg # of Students Active').should('have.text','Avg # of Students Active')
        cy.get('[id="5"]').contains('Last 7 Days Avg').should('have.text',' Last 7 Days Avg')
        cy.contains('Devices Distributed').should('have.text','Devices Distributed')
        cy.contains('Students With Devices').should('have.text','Students With Devices')
        cy.contains('Average Number of Apps Accessed per Student').should('have.text','Average Number of Apps Accessed per Student')
        cy.get('[id="8"]').contains('Avg # of Teachers Active').should('have.text','Avg # of Teachers Active')
        cy.get('[id="8"]').contains('Last 7 Days').should('have.text','Last 7 Days Avg')*/
        TrackingAtAGlanceSanity.textCheck(TrackingAtAGlanceObjects.inactiveStudentsID)
        TrackingAtAGlanceSanity.textCheck(TrackingAtAGlanceObjects.dailyActiveStudentsID)
        TrackingAtAGlanceSanity.textCheck(TrackingAtAGlanceObjects.weeklyActiveStudentsID)
        TrackingAtAGlanceSanity.textCheck(TrackingAtAGlanceObjects.inactiveStudentsYtdID)
        TrackingAtAGlanceSanity.textCheck(TrackingAtAGlanceObjects.devicesDistributionID)
        TrackingAtAGlanceSanity.textCheck(TrackingAtAGlanceObjects.applicationLoginsID)
        TrackingAtAGlanceSanity.textCheck(TrackingAtAGlanceObjects.activeTeachersID)
        cy.get('[class=brintell-framework-page-title]').scrollIntoView()
        return this
    }
    verifyComponentSanityOnChangingDropdown(dropdownID){
        const dd = new Dropdown
        const ddo = new DropDownObjects
        let noOfOptions = ddo.getDropDownOptions(dropdownID).length;//dd.getNumberOfDropdownOptions(dropdownName)
        cy.log(noOfOptions)
        for(let i=1; i<= noOfOptions; i++){
            cy.log('In loop i:'+i)
            dd.openDropDown(dropdownID)
            dd.clickOption(i)
            const sanity = new TrackingAtAGlanceSanity
            sanity.isTilesPresent()
            sanity.tilesHeaderCHeck()
            sanity.tilesTextCheck()
        }
        return this
    }

}
export default TrackingAtAGlanceSanity