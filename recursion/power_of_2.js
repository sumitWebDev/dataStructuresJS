var isPowerOfTwo = function(n) {
    if(n==1) return true
    if(n<1) return false
    return isPowerOfTwo(n/2)
};

console.log(isPowerOfTwo(3))