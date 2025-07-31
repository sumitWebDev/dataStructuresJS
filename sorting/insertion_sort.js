function insertion_sort(arr){
    let n = arr.length;
    let current,prev;
    for(let i =1; i<n;i++){
        current = arr[i];
        prev = i-1; 
        while(current < arr[prev] && prev >= 0){
            arr[prev+1] = arr[prev];
            prev--;
        }
        arr[prev+1] = current

    }
    return arr
}

console.log(insertion_sort([5,4,1,2,-9]))