describe('one',function()
{

   it('enrollemnt count',function()
   {
    cy.visit('https://cloud.google.com/')
    cy.get('[track-name=signIn]').click()
    cy.get('[type=email]').type('seswaran@inniveinc.com')
    //cy.get('[class=VfPpkd-RLmnJb]').click()
    cy.get('[name=signIn]').click()
    cy.get('[type=password]').type('S@ran2913')//'S@ran291')
    //cy.get('[class=VfPpkd-RLmnJb]').click()
    cy.get('[id=submit]').click()
    cy.get('.devsite-top-button').contains('Console').click()
    //type="submit"
    //cy.clearCookie('session_id')
    cy.get('[type="text"]').type('BigQuery').type('{enter}').trigger('input')
    cy.wait(5000)
    cy.get('[href="/bigquery?q=search&referrer=search&project=disd-i360-k12-dev"]').click()
    cy.wait(7000)
    cy.get('.CodeMirror-lines[role="presentation"]').click({force:true})//.type('hello',{force:true})
    cy.wait(7000)
    cy.get('.CodeMirror-scroll[tabindex="-1"]').type('hello',{force:true})
    //('.CodeMirror-scroll[tabindex="-1"]').type('SELECT count(*),b.Ethnicity  FROM `disd-i360-k12-dev.i360_k12_information.SchoolEnrollment` a join `disd-i360-k12-dev.i360_k12_information.Student` b on a.studentid=b.studentid group by ethnicity',{force:true})
    cy.get('.CodeMirror-line .p6n-storage-parser-error').should('have.text','SELECT count(*),b.Ethnicity  FROM `disd-i360-k12-dev.i360_k12_information.SchoolEnrollment` a join `disd-i360-k12-dev.i360_k12_information.Student` b on a.studentid=b.studentid group by ethnicity')
    //.CodeMirror-line .p6n-storage-parser-error
    //.CodeMirror-line .cm-variable
   })

   
  
})