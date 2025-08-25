//https://leetcode.com/problems/palindrome-linked-list/description/

var isPalindrome = function(head) {
    
    let arr=[];
    let count =0;
    while (head){
        arr.push(head.val);
        head = head.next;
        count++
    }
    let mid = (arr.length/2)-1;
    for (let i =0; i<arr.length;i++){
        if(arr[i] != arr[arr.length-1-i] && i <= mid){
            return false
        }
    }
    return true
};

console.log(isPalindrome(({
    val: 1,
    next: {
      val: 2,
      next: {
        val: 3,
        next:{
            val: 2,
            next: {
                val: 1,
                next: null
            }
        }
     }
    }
  })))