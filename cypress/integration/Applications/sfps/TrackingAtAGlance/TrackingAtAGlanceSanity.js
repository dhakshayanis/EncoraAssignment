import Dropdown from '../Common/DropDown'
import DropDownObjects from '../common/DropDownObjects'
import TrackingAtAGlanceObjects from './TrackingAtAGlanceObjects'

class TrackingAtAGlanceSanity{
    isTilesPresent(){
        TrackingAtAGlanceSanity.isTileVisible(TrackingAtAGlanceObjects.dailyInactiveStudentsID)
        TrackingAtAGlanceSanity.isTileVisible(TrackingAtAGlanceObjects.dailyActiveStudentsID)
        TrackingAtAGlanceSanity.isTileVisible(TrackingAtAGlanceObjects.devicesDistributionID)
        TrackingAtAGlanceSanity.isTileVisible(TrackingAtAGlanceObjects.applicationLoginsID)
        TrackingAtAGlanceSanity.isTileVisible(TrackingAtAGlanceObjects.activeTeachersID)
        TrackingAtAGlanceSanity.isTileVisible(TrackingAtAGlanceObjects.inactiveStudentsYtdID)
        TrackingAtAGlanceSanity.isTileVisible(TrackingAtAGlanceObjects.weeklyActiveStudentsID)
        TrackingAtAGlanceSanity.isTileVisible(TrackingAtAGlanceObjects.studenthotspotdistributionID)
        return this
    }
    static isTileVisible(tileID){
        cy.get(tileID).scrollIntoView()
        cy.get(tileID).should('be.visible')//student  active
    }
    static checkTileHeader(tileID){
        cy.get(tileID).scrollIntoView()
        //cy.get(tileID).within(()=>{
            cy.contains(TrackingAtAGlanceObjects.getTileTitle(tileID))
                    .should('have.text',TrackingAtAGlanceObjects.getTileTitle(tileID))//})
    }
    tilesHeaderCHeck(){
        TrackingAtAGlanceSanity.checkTileHeader(TrackingAtAGlanceObjects.dailyInactiveStudentsID)
        TrackingAtAGlanceSanity.checkTileHeader(TrackingAtAGlanceObjects.dailyActiveStudentsID)
        TrackingAtAGlanceSanity.checkTileHeader(TrackingAtAGlanceObjects.weeklyActiveStudentsID)
        TrackingAtAGlanceSanity.checkTileHeader(TrackingAtAGlanceObjects.inactiveStudentsYtdID)
        TrackingAtAGlanceSanity.checkTileHeader(TrackingAtAGlanceObjects.devicesDistributionID)
        TrackingAtAGlanceSanity.checkTileHeader(TrackingAtAGlanceObjects.applicationLoginsID)
        TrackingAtAGlanceSanity.checkTileHeader(TrackingAtAGlanceObjects.activeTeachersID)
        TrackingAtAGlanceSanity.checkTileHeader(TrackingAtAGlanceObjects.studenthotspotdistributionID)
        cy.get(TrackingAtAGlanceObjects.dailyInactiveStudentsID).scrollIntoView() 
        return this
    }
    static textCheck(tileID){
        cy.contains(TrackingAtAGlanceObjects.getTitleText1(tileID))
            .should('have.text',TrackingAtAGlanceObjects.getTitleText1(tileID))
        if(TrackingAtAGlanceObjects.getTitleText2(tileID)==''){
            cy.log('Text 2 is null for this tile')
        }
        else{
            cy.get(tileID).contains(TrackingAtAGlanceObjects.getTitleText2(tileID))
            .should('have.text',TrackingAtAGlanceObjects.getTitleText2(tileID))
        }       
    }    
    tilesTextCheck(){
        TrackingAtAGlanceSanity.textCheck(TrackingAtAGlanceObjects.dailyInactiveStudentsID)
        TrackingAtAGlanceSanity.textCheck(TrackingAtAGlanceObjects.dailyActiveStudentsID)
        TrackingAtAGlanceSanity.textCheck(TrackingAtAGlanceObjects.weeklyActiveStudentsID)
        TrackingAtAGlanceSanity.textCheck(TrackingAtAGlanceObjects.inactiveStudentsYtdID)
        TrackingAtAGlanceSanity.textCheck(TrackingAtAGlanceObjects.devicesDistributionID)
        TrackingAtAGlanceSanity.textCheck(TrackingAtAGlanceObjects.applicationLoginsID)
        TrackingAtAGlanceSanity.textCheck(TrackingAtAGlanceObjects.activeTeachersID)
        TrackingAtAGlanceSanity.textCheck(TrackingAtAGlanceObjects.studenthotspotdistributionID)
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