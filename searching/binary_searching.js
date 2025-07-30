function binary_search (nums, target) {
    let left = 0;
    let right = nums.length-1;
    let middle;
    let i=0;
    while(left<=right){
        middle = Math.floor((left+right)/2);
        if(target > nums[middle]){
            left = middle+1
        }
        else if(target<nums[middle]){
            right = middle-1;
        }
        else if(target == nums[middle] || (left || right) == target){
            return middle
        }
    }
    return -1
}

console.log(binary_search([-1,0,5],-1))