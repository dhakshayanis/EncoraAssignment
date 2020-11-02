class goToTab{
    goToTab(option){
        cy.contains(option).click()
        cy.wait(3000)
        return this
    }
}
export default goToTab