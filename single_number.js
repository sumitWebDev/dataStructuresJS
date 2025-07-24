
//Approach 1
var singleNumber = function(nums) {
    let map = {}
    for (let i =0; i<nums.length;i++){
        
        if(map[nums[i]]){
            map[nums[i]] += 1;
        }
        else {
            map[nums[i]] = 1;
        }
    }
    for(let i=0;i<nums.length;i++){
        if(map[nums[i]] == 1) return nums[i]
    }
};



//Approach 2
var singleNumber2 = function(nums) {
    let xor = 0;
    for (let i =0; i<nums.length;i++){
        xor^= nums[i]
    }
    return xor
};

console.log(singleNumber2([4,1,2,1,2]))