class NavigationPanelVerifications{
    static AtAGlanceDefaultFilterHeaders=["School Year"]
    static AtAGlanceDefaultFilterOptions=["2021"]

    static getExpectedFilterHeaders(filterHeader){
        let expectedFilterHeaders = NavigationPanelVerifications[pageName.replace(/ /g,'')+filterOption+'FilterHeaders']
        if(filterOptionsJsonName!='Default'){
            expectedFilterHeaders = expectedFilterHeaders+filterHeader
        }
        return expectedFilterHeaders;
    }
    static getExpectedFilterOptions(pageName,filterOption){
        let expectedFilterOptions = NavigationPanelVerifications[pageName.replace(/ /g,'')+filterOption+'FilterOptions']
        if(filterOptionsJsonName!='Default'){
            expectedFilterOptions = expectedFilterOptions.concat(filterOption)
        }
        return expectedFilterOptions;
    }
}
export default NavigationPanelVerifications