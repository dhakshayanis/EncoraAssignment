class DateFilter{
    startDateDefault(){
        cy.xpath('//*[text()="Start Date"]').contains('Start Date')
        cy.get('[placeholder="Start Date"]').should('have.value','01-Aug-2020')
        return this
    }
    endDateDefault(){
        cy.xpath('//*[text()="End Date"]').contains('End Date')
        const todaysDate = Cypress.moment().format('DD-MMM-YYYY')
        cy.get('[placeholder="End Date"]').should('have.value',todaysDate)
        return this
    }
}
export default DateFilter