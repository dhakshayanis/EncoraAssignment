class Duplicates{
static arrayWithDuplicates = [
    {"type":"LICENSE", "licenseNum": "12345", state:"NV"},
    {"type":"LICENSE", "licenseNum": "A7846", state:"CA"},
    {"type":"LICENSE", "licenseNum": "12345", state:"OR"},
    {"type":"LICENSE", "licenseNum": "10849", state:"CA"},
    {"type":"LICENSE", "licenseNum": "B7037", state:"WA"},
    {"type":"LICENSE", "licenseNum": "12345", state:"NM"}
];

removeDuplicates(originalArray, prop) {
     var newArray = [];
     var lookupObject  = {};

     for(var i in originalArray) {
        lookupObject[originalArray[i][prop]] = originalArray[i];
     }

     for(i in lookupObject) {
         newArray.push(lookupObject[i]);
     }
      return newArray;
 }
finalResult(){
    const rem = new Duplicates
    var uniqueArray = rem.removeDuplicates(Duplicates.arrayWithDuplicates, "licenseNum");
    cy.log("uniqueArray is: " + JSON.stringify(uniqueArray));
    return this
 }
}export default Duplicates