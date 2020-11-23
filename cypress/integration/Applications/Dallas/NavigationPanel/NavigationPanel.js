import Filters from './Filters'

class NavigationPanel{

    static filterSection = '.ant-collapse-header'
    static filterSectionPrefix ='.ant-collapse:nth-child'
    static filters = '(//*[contains(@class,"ant-select-dropdown ")])'//'.ant-select-dropdown'
    static filterHeaders ='(//*[@class="select-floating-text"])'
    static ddOptions ='//*[@role="option"]'

    hovernavfilter() {
        cy.xpath("(//i[@class='material-icons'])[3]").trigger('mouseover')
        cy.wait(3000);
    }
    dropdownOptions(){

    }
    checkNumberOfDropdowns(pageName){
        let page = pageName.replace(/ /g,'')
        let filtersExpected = Filters['filtersIn'+page]
        let filtersCountExpected = filtersExpected.length;
        const np = new NavigationPanel
        np.hovernavfilter();
        cy.xpath(NavigationPanel.filters).then((count)=>{
            let actualFiltersCount = count.length;
            expect(actualFiltersCount).to.equal(filtersCountExpected)
        })
    }

    checkDropdowns(pageName){
        let page = pageName.replace(/ /g,'')
        cy.xpath(NavigationPanel.filterHeaders).then((dd)=>{
            for(let i=1; i<=dd.length; i++){
                let filterName = Filters['filtersIn'+page][(i-1)]
                cy.xpath(NavigationPanel.filterHeaders+'['+i+']').invoke('text').then((ddname)=>{
                    expect(filterName).to.equal(ddname)
                })
            }

        })
    }
    static getExpectedDropdownOptions(pageName, i){
        let page = pageName.replace(/ /g,'')
        let filterName = Filters['filtersIn'+page][(i-1)].replace(/ /g,'')
        cy.log('FilterName : '+filterName)
        let options = Filters[filterName+'Options']
        cy.log('options : '+options)
        return options
    }
    checkDropdownOption(){
        let page = pageName.replace(/ /g,'')
        cy.xpath(NavigationPanel.filters).then((dd)=>{
            for(let i=1; i<=dd.length; i++){
                cy.xpath(NavigationPanel.filters+'['+i+']'+NavigationPanel.ddOptions).then((dds)=>{
                    let optionsExpected = NavigationPanel.getExpectedDropdownOptions()
                    expect(optionsExpected.length).to.equal(dds.length)
                    for(let item=1; item<=optionsActual.length; item++){
                        cy.xpath
                        expect(optionsActual[item]).to.equal(optionsExpected[item])
                    }
                })
            }

        })
    }
}
export default NavigationPanel