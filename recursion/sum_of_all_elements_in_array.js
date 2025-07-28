function sum(arr){
    if(arr.length < 1 ) return 0
    let oldValue = arr.slice(0,arr.length);
    arr.length--;
    return oldValue[oldValue.length-1]+sum(arr)
 }
 console.log(sum([5,3,2,0,1]));