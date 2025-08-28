//https://leetcode.com/problems/palindrome-linked-list/description/

// Approach 1 - Convert Linked List into Array and then check Palindrome
// Time complexity - O(n), Space Complexity - O(n)
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

// Approach 2 - Find middle of linkedlist and reverse
// Time complexity - O(n), Space Complexity - O(1)
var isPalindrome2 = function(head) {

    //Finding the middle element
    let slow = head;
    let fast = head;
    while (fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
    }
    // Reverse the second half
    let prev = null;
    let current = slow;
    let temp;
    while(current){
        temp = current.next;
        current.next = prev;
        prev=current;
        current = temp;
    }
    //Checking for Palindrome
    let firstList = head;
    let secondList = prev;

    while (secondList){
        if(firstList.val != secondList.val){
            return false
        }
        firstList = firstList.next;
        secondList = secondList.next;
    }
   return true
};

console.log(isPalindrome2(({
    val: 1,
    next: {
      val: 2,
      next: {
        val: 2,
        next:null
     }
    }
  })))