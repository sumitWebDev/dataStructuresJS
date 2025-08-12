//https://leetcode.com/problems/reverse-linked-list/description/


var reverseList = function(head) {
    let curr = head;
    let prev = null;
    let new_curr = null;
    while(curr){ //--> current !=null
        new_curr = curr.next;
        curr.next = prev;
        prev = curr;
        curr = new_curr;
    }
    head = prev;
    return head
};


console.log(reverseList(({
    val: 1,
    next: {
      val: 2,
      next: {
        val: 3,
        next:{
            val: 4,
            next: {
                val: 5,
                next: {value:6,next:null}
            }
        }
     }
    }
  })))