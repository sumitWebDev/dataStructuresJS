var missingNumber = function(nums) {
    let n = nums.length;
    let sumOfAllNumbers = (n*(n+1))/2;
    let sumOfArray = 0
    for(let i=0; i<nums.length;i++){
        sumOfArray += nums[i]
    }
    return sumOfAllNumbers-sumOfArray
};

console.log(missingNumber([3,0,1]))