//https://leetcode.com/problems/linked-list-cycle/description/

//Approach 1 with Set
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



console.log(hasCycle(({
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