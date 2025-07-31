function bubble_sort(arr){
    let n = arr.length;
    let isSwapped = false;
    for(let i =0; i<n-1;i++){
        for (let j = 0; j<n-1-i;j++){
            if(arr[j] > arr[j+1]){
                arr[j] = arr[j]^arr[j+1];
                arr[j+1] = arr[j]^arr[j+1]; 
                arr[j] = arr[j]^arr[j+1]; 
                isSwapped = true;
            }
            if (!isSwapped) break; // Important modifcation for Best Case
        }
    }
    return arr
}

console.log(bubble_sort([9,8,7,6,5,4,3,2,1,0]))