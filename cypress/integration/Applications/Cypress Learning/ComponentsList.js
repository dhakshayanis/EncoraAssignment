class ComponentsList{

static sourceXpath ='(//script[contains(@src,"modules")])'

getComponentsList(){
    cy.xpath(ComponentsList.sourceXpath).its('length').then(length=>{
        for (let i=1; i<=length; i++){
            cy.xpath(ComponentsList.sourceXpath+'['+i+']').invoke('attr','src').then(source=>{
                //cy.log(source)
                var componentDetails = source.split('/')
                var componentName = componentDetails[1];
                var componentVersion = componentDetails[2];
                cy.log("Component Name : "+componentName)
                cy.log("Version : "+componentVersion)
            })
        }
    })
    return this
    }
}
export default ComponentsList

