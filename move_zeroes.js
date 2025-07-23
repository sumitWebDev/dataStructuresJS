var moveZeroes = function(nums) {
    let pointer = 0;
    let temp='';
    for(let i=0; i<nums.length;i++){
        if(nums[i]!=0){
            temp = nums[pointer];
            nums[pointer] = nums[i];
            nums[i]=temp;
            pointer++
        }
    }
    return nums
};

console.log(moveZeroes([0,1,0,3,12]));