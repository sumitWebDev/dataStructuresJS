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

console.log(merge1([1],1,[1,2,2],3))