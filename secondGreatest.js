function secondGreatest(arr){
    if(arr.length<2) return null
    let first_max = -Infinity;
    let second_max = -Infinity;
    for(let i=0; i<arr.length;i++){
        if(arr[i]>first_max ){
            second_max = first_max 
            first_max = arr[i];
        }
        else if(arr[i]>second_max && arr[i]!== second_max){
            second_max = arr[i]
        }
    }
    return second_max;

}

console.log(secondGreatest([-22,-99,-11,-3,-3]));