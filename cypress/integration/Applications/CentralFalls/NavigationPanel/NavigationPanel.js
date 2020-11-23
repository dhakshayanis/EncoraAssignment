import Filters from './Filters'

class NavigationPanel{

    static filterSection = '.ant-collapse-header'
    static filterSectionPrefix ='.ant-collapse:nth-child'
    static ddOptionsPrefix = '(//*[contains(@class,"ant-select-dropdown ")])'//'.ant-select-dropdown'
    static filtersField ='(//*[@class="ant-select-selection__rendered"])'
    static filterHeaders ='(//*[@class="select-floating-text"])'
    static ddOptions ='//*[@role="option"]'

    hovernavfilter() {
        cy.xpath("(//i[@class='material-icons'])[3]").trigger('mouseover')
        cy.wait(3000);
    }

    checkNumberOfDropdowns(pageName){
        let page = pageName.replace(/ /g,'')
        let filtersExpected = Filters['filtersIn'+page]
        cy.log(filtersExpected)
        let filtersCountExpected = filtersExpected.length;
        cy.log(filtersCountExpected)
        const np = new NavigationPanel
        np.hovernavfilter();
        cy.xpath(NavigationPanel.filterHeaders).then((count)=>{
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
    checkDropdownOption(pageName){
        let page = pageName.replace(/ /g,'')
        cy.xpath(NavigationPanel.filterHeaders).then((filters)=>{
            for(let i=1; i<=filters.length; i++){
                cy.xpath(NavigationPanel.filtersField+'['+i+']').click()
                cy.wait(2000)
                let optionsExpected = NavigationPanel.getExpectedDropdownOptions(pageName,i)
                cy.xpath(NavigationPanel.ddOptionsPrefix+'['+i+']'+NavigationPanel.ddOptions).then((dds)=>{
                    expect(optionsExpected.length).to.equal(dds.length)
                    for(let option=1; option<=dds.length; option++){
                        let xpathOfOption = NavigationPanel.ddOptionsPrefix+'['+i+']'+NavigationPanel.ddOptions+'['+option+']'
                        cy.xpath(xpathOfOption).invoke('text').then((optionsActual)=>{
                            expect(optionsActual).to.equal(optionsExpected[option-1])
                        })
                    }
                })
            }
        })
    }
    

}
export default NavigationPanel