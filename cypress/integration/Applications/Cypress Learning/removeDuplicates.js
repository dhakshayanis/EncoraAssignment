class RemoveDuplicateInArrayExample{  
removeDuplicateElements(arr, n){  
        if (n==0 || n==1){  
            return n;  
        }  
        //let temp[];  
        let j = 0;  
        let temp = new Array();
        for (let i=0; i<n-1; i++){  
            if (arr[j] != arr[i]){  
                temp[j++] = arr[i];  
            }  
         }  
        temp[j++] = arr[n-1];     
        // Changing original array  
        for (let i=0; i<j; i++){  
            arr[i] = temp[i];  
        }  
        return j;  
    }  
       
    final() {  
        let arr = [10,20,30,20,30,30,40,50,50];  
        let count = arr.length;  
        //cy.log(count)
        const duplicates = new RemoveDuplicateInArrayExample
        let dup = duplicates.removeDuplicateElements(arr, count);  
        //printing array elements  
        for (let i=0; i<dup; i++) {
           cy.log(arr[i]+" "); 
        } 
        return this
    }  
}export default RemoveDuplicateInArrayExample