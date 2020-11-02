import NavigateToPage from './examples/DemoApplication/NavigateToPage'
import PageTitleCheck from './examples/DemoApplication/PageTitleCheck'
import PageHeader from './examples/DemoApplication/PageHeader'
import TrackingAtAGlanceSanity from './examples/DemoApplication/TrackingAtAGlance/TrackingAtAGlanceSanity'
import DateFilter from './examples/DemoApplication/DateFilter'
import Dropdown from './examples/DemoApplication/DropDown'
import TrackingAtAGlanceObjects from './examples/DemoApplication/TrackingAtAGlance/TrackingAtAGlanceObjects'
import PercentageCalculation from './examples/DemoApplication/TrackingAtAGlance/PercentageCalculation'

describe('login',function()
{
it('navigate to Tracking At a Glance',function()
{
    cy.visit("https://demo.remotelearning.innive.io")
    Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from failing the test
            return false
    })
    cy.get('[name="Email"]').type('tambalavan@inniveinc.com')
    cy.get('#next').click()
    cy.get('[type="password"]').type('9486304276')
    cy.get('#submit').click()
    //cy.visit("https://demo.remotelearning.innive.io/welcome.html")
    cy.wait(10000)
    cy.wait(20000)
    cy.get('[class=external-generic-component-child2]').contains('Remote').click()
    })
})