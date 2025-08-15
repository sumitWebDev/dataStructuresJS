//https://leetcode.com/problems/power-of-four/?envType=daily-question&envId=2025-08-15

//Approach 1
var isPowerOfFour = function(n) {
    let power = 0;
    
    while(Math.pow(4,power) <= n){
        if(Math.pow(4,power) === n ) return true
        power +=1
    }
    return false
};


var isPowerOfFour2 = function(n) {
    if(n<=0) return false 
    while(n%4 === 0){
        n=n/4
    }
    return n==1
};


console.log(isPowerOfFour2(0))