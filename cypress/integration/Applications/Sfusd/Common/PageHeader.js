class PageHeader{
    pageHeaderCheck(){
        //logoutcheck
        cy.get('[class=logout]').should('have.text','Logout')

        //UsernameCheck
        cy.get('[class=user_name]').should('have.text','khushboo')

        //logo check

      /*cy.get('[alt="WHOLE CHILD INTEGRATED DATA"]').invoke('attr','src').then(imageUrl=>{
        let splitString = imageUrl.split('images/')
        let logo = splitString[1]
        expect(logo).to.equal('client_logo.png')*/
        cy.get('[alt="WHOLE CHILD INTEGRATED DATA"]').should('have.attr','src','https://sfusd.remotelearning.innive.io/images/client_logo.png')
        return this
}
       
    
    pageFooterCheck(){
        cy.get('.brintell-framework-footer-text').should('have.text','Disclaimer: This information is the property of the San Fransisco Public Schools and is intended solely for use by individuals expressly authorized by the District. This information is not to be reproduced in any form, viewed, distributed, or disclosed in any way to or by unauthorized individuals. The sharing of this information is subject to conditions set forth in applicable laws, regulations, and policies regarding privacy and confidentiality.')
        return this
    }
}
export default PageHeader