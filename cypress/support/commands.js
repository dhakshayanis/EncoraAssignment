// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add("login", (emailID,password) => 
     {
        cy.visit('https://admin-demo.nopcommerce.com/login')
        cy.get('[name=Email]').clear().type(emailID)
        cy.get('[name=Password]').clear().type(password)
        cy.get('[type=submit]').click()         
           })
   Cypress.Commands.add("checkIfEleExists",(ele) =>{
    //return new Promise((resolve,reject)=>{
        /// here if  ele exists or not
        cy.get(ele).its('length').then(res=>{
            if(res > 0){
                //// do task that you want to perform
                cy.log('dropdown is present')
                //resolve();
            }else{
                 //reject();
            }
        });
    //})


    Cypress.Commands.add('invoketext', (result,datatobeverified, data) => {
        cy.xpath(datatobeverified).as('data1')
    cy.get('@data1')
        .invoke('text').then(value => {
         cy.writeFile('./cypress/fixtures/' + result + '.json', '"' + data + '":'  + '"' + value + '",'+"\n", { flag: 'a+' })
        })
    })
})
