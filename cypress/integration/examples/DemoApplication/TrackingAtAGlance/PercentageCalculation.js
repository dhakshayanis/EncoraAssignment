class PercentageCalculation{
    static getNr(tileID){
        return cy.get(tileID+' [style="color: rgb(4, 90, 181); font-size: 34px; font-weight: 500; line-height: 1;"]').invoke('text')//.as(Nr)
    }
    static getDR(tileID){
        return cy.get(tileID+' [style="color: rgb(98, 113, 129); font-size: 16px; font-weight: 500;"]').invoke('text')//.as(Dr)
    }
    static getPercentageDisplayed(tileID){
        return cy.get(tileID+' [style="font-size: 12px; width: 20px; text-align: right; margin-right: 5px; color: rgb(4, 90, 181); font-weight: 500; margin-left: 2px;"]').invoke('text')//.as(Nr)
    }
    percentageCheck(){
        let nr = PercentageCalculation.getNr('[id="4"]').replace(',','')
        let dr = PercentageCalculation.getDR('[id="4"]').replace(',','').replace('of ','')
        let percentActual = PercentageCalculation.getPercentageDisplayed('[id="4"]').replace('%','')
        let percentExpected = nr*100/dr;
        expect(percentExpected).to.equal(percentActual)
        return this 
    }
}
export default PercentageCalculation