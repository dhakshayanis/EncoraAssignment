describe('test_name', function() {

    it('what_it_does', function() {
   
       //cy.visit('https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?response_type=code&redirect_uri=https%3A%2F%2Fdemo.remotelearning.innive.io%2Fauth%2Fgoogle%2Fredirect&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email&client_id=919148607422-8ft1rue72dbm29mc3c7pcbh0gs5tq33c.apps.googleusercontent.com&flowName=GeneralOAuthFlow')
    
       //cy.viewport(1536, 754)
    
       //cy.visit('https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?response_type=code&redirect_uri=https%3A%2F%2Fdemo.remotelearning.innive.io%2Fauth%2Fgoogle%2Fredirect&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email&client_id=919148607422-8ft1rue72dbm29mc3c7pcbh0gs5tq33c.apps.googleusercontent.com&flowName=GeneralOAuthFlow')
    
       //cy.viewport(1536, 754)
    
       //cy.visit('https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?response_type=code&redirect_uri=https%3A%2F%2Fdemo.remotelearning.innive.io%2Fauth%2Fgoogle%2Fredirect&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email&client_id=919148607422-8ft1rue72dbm29mc3c7pcbh0gs5tq33c.apps.googleusercontent.com&flowName=GeneralOAuthFlow')
    
       //cy.get('.JDAKTe:nth-child(4) > .lCoei > .d2laFc > .tgnCOd > .WBW9sf > #profileIdentifier').click()
    
       cy.visit('https://demo.remotelearning.innive.io/welcome.html')
       cy.wait(30000)
       cy.get('[class=external-generic-component-child2]').contains('Remote').click()
       //cy.get('div > .brintell-framework-App > .brintell-framework-top > .brintell-framework-top-area > .brintell-framework-area-title').click()
    
       //cy.get('div > .external-generic-component-child:nth-child(5) > div > .external-generic-component-child:nth-child(2) > .external-generic-component-child2').click()
    
       cy.visit('https://demo.remotelearning.innive.io/tracking_at_a_glance.html')
       cy.wait(45000)
    
       cy.xpath('(//*[@class="toolbar-component-menu"]//*[@viewBox="0 0 24 24"])[2]').click()
    
       cy.visit('https://demo.remotelearning.innive.io/tracking_drilldown.html')
       cy.wait(40000)
    
       cy.get('.elastic-prompt-component-dropdown-prompt > div > #undefined-undefined-Dimension-12817 > div > div:nth-child(2)').click()
    
       cy.get('div:nth-child(3) > span > div > div > div').click()
    
       cy.get('.wrap-component > .wrap-component-top > div > .elastic-prompt-component > .elastic-prompt-component-row').click()
    
       cy.get('div > #undefined-undefined-Dimension-12817 > div > button > div').click()
    
       cy.get('div:nth-child(2) > span > div > div > div').click()
    
       cy.get('#RANGED_LINE_BAR_CHART_COMPONENT > .wrap-component > .wrap-component-top > .toolbar-component > .toolbar-component-header-container').click()
    
    })
   
   })
   