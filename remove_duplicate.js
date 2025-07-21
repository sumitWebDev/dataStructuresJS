var removeDuplicates = function(nums) {
    let pointer1 = 0;
    for (let i =1; i< nums.length;i++){
        if (nums[i-1] !== nums[i] ){
            nums[pointer1+1] = nums[i]
            pointer1++;
        }
    }
    return nums
};

console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))