//https://leetcode.com/problems/linked-list-cycle/description/

//Approach 1 with Set - Time complexity - O(n), Space Complexity - O(n)
var hasCycle = function(head) {
    let linked_list_set = new Set();
    while (head != null){
        if(!linked_list_set.has(head)){
            linked_list_set.add(head)
            head = head.next;
        }
        else return true
    }
    return false    
};


//Approach 2 with Floyd's Algorithm - Time complexity - O(n), Space Complexity - O(1)
var hasCycle2 = function(head) {
    let slow = head;
    let fast = (!head) ? (function(){return false})() : head.next;
    while (slow != fast){
        if(!fast || !fast.next) return false
        slow = slow.next;
        fast = fast.next.next;
        
    }
    return true 
};


console.log(hasCycle2(({
    val: 1,
    next: {
      val: 2,
      next: {
        val: 3,
        next:{
            val: 4,
            next: {
                val: 2,
                next: null
            }
        }
     }
    }
  })))