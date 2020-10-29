class PageHeader{
    pageHeaderCheck(){
        //logoutcheck
        cy.get('[class=logout]').should('have.text','Logout')

        //UsernameCheck
        cy.get('[class=user_name]').should('have.text','dhakshayanis')

        //logo check
        cy.get('[alt="WHOLE CHILD INTEGRATED DATA"]').should('have.attr','src','https://demo.remotelearning.innive.io/images/client_logo_boston.png')
        return this
    }
    pageFooterCheck(){
        cy.get('.brintell-framework-footer-text').should('have.text','Disclaimer: This information is the property of the Demo Public Schools and is intended solely for use by individuals expressly authorized by the District. This information is not to be reproduced in any form, viewed, distributed, or disclosed in any way to or by unauthorized individuals. The sharing of this information is subject to conditions set forth in applicable laws, regulations, and policies regarding privacy and confidentiality.')
        return this
    }
}
export default PageHeader