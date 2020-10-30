class Logout{
    logout(){
        cy.get('[class="logout"]').click()
        return this
    }
}
export default Logout