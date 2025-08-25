//https://leetcode.com/problems/contains-duplicate/description/

//Approach 1

var containsDuplicate = function(nums) {
    let map = {};
    
    for(let i =0; i< nums.length;i++){
        if(map[nums[i]]){
            map[nums[i]]+=1
        }
        else
            map[nums[i]] = 1
    }

    for(let i =0; i<nums.length;i++){
        if(map[nums[i]] > 1 ) return true
    }
    return false
};


var containsDuplicate2 = function(nums) {
    let set = new Set(nums);
    return set.size == nums.length ? true : false
};

console.log(containsDuplicate2([1,2,3,4]))