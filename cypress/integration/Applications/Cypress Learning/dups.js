class dups{

    removeDuplicateFromArray(valArray) {
        var uniqueVal = {};
        valArray.forEach(function(i) {
          if(!uniqueVal[i]) {
            uniqueVal[i] = true;
          }
             
        });
        
        return Object.keys(uniqueVal);  
    }
    
}export default dups