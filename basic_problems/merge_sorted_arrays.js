
//Approach 1
var merge1 = function(nums1, m, nums2, n) {
    nums1Copy = nums1.slice(0,m);
    nums1.length = m+n;
    nums1CopyPointer = 0;
    nums2Pointer = 0;
    for(let i =0; i<nums1.length; i++){
         if(nums1Copy[nums1CopyPointer]<nums2[nums2Pointer]){
            nums1[i] = nums1Copy[nums1CopyPointer];
            nums1CopyPointer++;
        }
        else if(nums1CopyPointer >=m){
            nums1[i] = nums2[nums2Pointer]
            nums2Pointer++;
        }
        else if(nums2Pointer>=n){
            nums1[i] = nums1Copy[nums1CopyPointer];
            nums1CopyPointer++;
        }
        else{
            nums1[i] = nums2[nums2Pointer]
            nums2Pointer++;
        }
    }

    return nums1
}

//Approach 2
var merge2 = function(nums1, m, nums2, n) {
    nums1.length = m+n;
    nums1Pointer = m-1;
    nums2Pointer = n-1;
    for(let i =nums1.length-1; i>=0; i--){
         if((nums2Pointer<0 ) || (nums1[nums1Pointer]>nums2[nums2Pointer] && nums1Pointer>=0)){
            nums1[i] = nums1[nums1Pointer];
            nums1Pointer--;
        }
        else{
            nums1[i] = nums2[nums2Pointer]
            nums2Pointer--;
        }
    }

    return nums1
}

console.log(merge2([2,0],1,[1],1))