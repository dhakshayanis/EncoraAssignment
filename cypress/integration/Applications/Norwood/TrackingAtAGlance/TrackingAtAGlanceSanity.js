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
    tilesHeaderCHeck(){
        cy.contains('INACTIVESTUDENTS').should('have.text','INACTIVESTUDENTS')
        cy.get('[id="5"]').scrollIntoView()
        cy.get('[id="5"]').within(()=>{cy.contains('ACTIVESTUDENTS').should('have.text','ACTIVESTUDENTS')})
        cy.get('[id="4"]').scrollIntoView()
        cy.get('[id="4"]').within(()=>{cy.contains('DEVICESDISTRIBUTION').should('have.text','DEVICESDISTRIBUTION')})
        cy.get('[id="7"]').scrollIntoView()
        cy.get('[id="7"]').within(()=>{cy.contains('APPLICATION LOGINS').should('have.text','APPLICATION LOGINS')})
        cy.get('[id="8"]').scrollIntoView()
        cy.get('[id="8"]').within(()=>{cy.contains('ACTIVETEACHERS').should('have.text','ACTIVETEACHERS')})
        cy.get('[id="10"]').scrollIntoView() 
        return this
    }
    tilesTextCheck(){
        cy.contains('Avg # of Inactive students').should('have.text','Avg # of Inactive students')
        cy.get('[id="10"]').contains('Last 7 Days Avg').should('have.text','Last 7 Days Avg')
        cy.contains('Avg # of Students Active').should('have.text','Avg # of Students Active')
        cy.get('[id="5"]').contains('Last 7 Days Avg').should('have.text',' Last 7 Days Avg')
        cy.contains('Devices Distributed').should('have.text','Devices Distributed')
        cy.contains('Students With Devices').should('have.text','Students With Devices')
        cy.contains('Average Number of Apps Accessed per Student').should('have.text','Average Number of Apps Accessed per Student')
        cy.get('[id="8"]').contains('Avg # of Teachers Active').should('have.text','Avg # of Teachers Active')
        cy.get('[id="8"]').contains('Last 7 Days').should('have.text','Last 7 Days Avg')
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