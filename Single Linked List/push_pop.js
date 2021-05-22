class Node{
    constructor(val){
        this.val = val;
        this.next=null
    }
}

class SingleLinkedList{
    constructor(){
        this.length= 0;
        this.head=null;
        this.tail=null
    }
    push(val){
              var node = new Node(val);
                if(!this.head){
                this.head = node;
                this.tail= this.head;
            }
            else{
                this.tail.next = node ;
                this.tail = node;
            }
            this.length++;
            return this
        }
    pop(){
        if(this.length == 0) return undefined
        var current = this.head;
        var pre = current;
        while(current.next){
            pre = current;
            current = current.next
        }
        this.tail = pre;
        this.tail.next=null;
        this.length--;
    if(this.length == 0){
            this.head = null;
            this.tail = null;
        }
        return current 
    }


}


var list = new SingleLinkedList();
