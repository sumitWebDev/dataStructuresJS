function selection_sort(arr){
    let n = arr.length;
    let isSwapped = false;
    let temp;
    for(let i =0; i<n-1;i++){
        let min = i;
        for (let j = i+1; j<n;j++){
            if(arr[min] > arr[j]){
                min = j
            }
        }
        if(min !== i ) { // Improvement
            arr[i] = arr[min]^arr[i]
            arr[min] = arr[min]^arr[i]
            arr[i] = arr[min]^arr[i]
        }

    }
    return arr
}

console.log(selection_sort([5,4,1,2,-9]))