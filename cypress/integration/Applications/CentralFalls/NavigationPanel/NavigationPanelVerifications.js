class NavigationPanelVerifications{
    static AtaGlanceDefaultFilterHeaders=["School Year"]
    static AtaGlanceDefaultFilterOptions=["2021"]

    static getExpectedFilterHeaders(pageName,filterOption){
        let expectedFilterHeaders = NavigationPanelVerifications[pageName.replace(/ /g,'')+filterOption+'FilterHeaders']
        /*if(filterOptionsJsonName!='Default'){
            expectedFilterHeaders = expectedFilterHeaders+filterHeader
        }*/
        return expectedFilterHeaders;
    }
    static getExpectedFilterOptions(pageName,filterOption){
        let expectedFilterOptions = NavigationPanelVerifications[pageName.replace(/ /g,'')+filterOption+'FilterOptions']
        /*if(filterOptionsJsonName!='Default'){
            expectedFilterOptions = expectedFilterOptions.concat(filterOption)
        }*/
        return expectedFilterOptions;
    }
}
export default NavigationPanelVerifications