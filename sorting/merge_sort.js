function merge(arr1,arr2){
    let m = arr1.length;
    let n = arr2.length;
    let arr = []; 
    let arrayLength = (m+n)
    let arr1Pointer=0,arr2Pointer = 0;
    for(let i =0 ;i<arrayLength;i++){
        if((arr2Pointer>=n) || (arr1[arr1Pointer] < arr2[arr2Pointer])){
            arr[i] = arr1[arr1Pointer];
            arr1Pointer++
        }
        else if (arr1Pointer >=m){
            arr[i]=arr2[arr2Pointer]
            arr2Pointer++
        }
        else{
            arr[i] = arr2[arr2Pointer]
            arr2Pointer++;
        }
    }
    
    return arr
}

function merge_sort(arr){
    if (arr.length <=1 ) return arr;
    let mid = arr.length/2;
    let left = merge_sort(arr.slice(0,mid));
    let right = merge_sort(arr.slice(mid));
    return merge (left,right)
}

console.log(merge_sort([8,4,5,6,9,1,3,6]))