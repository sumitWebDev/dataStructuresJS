var removeElement = function(nums, val) {
    let x = 0;
    for(let i =0 ; i<nums.length;i++){
        if(nums[i] != val ){
            nums[x] = nums[i];
            x++;
        }
    }
    return nums
};

output = removeElement([3,2,2,3],3)
console.log(output)