class Dropdown{
    verifydropdown() {
        const dropdown = '#react-select-2--value > div.Select-value'
        const dropdownoptions = 'div.Select-option'
        cy.get(dropdown).click()
        cy.wait(3000)
        cy.get(dropdownoptions)
            .then(($dropoptions) => {
                const listcount = $dropoptions.length;
                expect($dropoptions).to.have.length(listcount)
                var i;
                for (i = 0; i < listcount; i++) {
                    cy.get($dropoptions[i]).click()
                    cy.wait(3000)
                    var value;
                    switch (i) {
                        case 0:
                            value = "div.basic-container-container > div:nth-child(3) > section > div > div:nth-child(4) .custom-am-charts-stacked-bar-component";
                            break;
                        case 1:
                            value = "div.basic-container-container > div:nth-child(3) > section > div > div:nth-child(4) .custom-am-charts-stacked-bar-component";
                            break;
                        case 2:
                            value = "#htmlview\!1Div > table:nth-child(1)";
                            break;
                        case 3:
                            value = "div.basic-container-container > div:nth-child(3) > section > div > div:nth-child(4) .custom-am-charts-stacked-bar-component";
                            break;
                    }
                    cy.get(value).should('be.visible')
                    cy.get(dropdown).click()
                }

            });
    }   
    
}