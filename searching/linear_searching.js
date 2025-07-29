function linear_search (arr,n){
    let pos;
    for (let i =0; i< arr.length;i++){
        if (arr[i] == n){
            return i;
        }
    }
}

console.log(linear_search([44,77,11,23,44],11))