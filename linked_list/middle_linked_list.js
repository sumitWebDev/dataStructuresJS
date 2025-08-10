
// Approach 1
// Time & Space Complexity [O(n)]
// function middle_linked_list(head){
//     var arr = [];
//     while (head != null){
//         arr.push(head.val)
//         head = head.next;
//     }

//     return arr[Math.floor(arr.length/2)]
// }



// Approach 2
// Time Complexity = O(n/2), Space Complexity = O(1 )
function middle_linked_list(head){
    let slow = head;
    let fast = head;
    while(fast != null && fast.next !=null){
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow
}

console.log(middle_linked_list({
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
  }))