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
    shift(){
        if(this.length == 0) return undefined
        var current = this.head;
        var newHead = this.head.next;
        this.head=this.head.next;
        this.length--
        if(this.length == 0){
            this.head = null;
            this.tail = null;
        }
        return current.val 
    }

    unshift(val){
        var node = new Node(val)
        if(this.length == 0){
            this.head= node;
            this.tail=node;
        }
        var oldHead = this.head;
        this.head = node;
        this.head.next = oldHead;
        this.length++;
        return this  
    }
}


var list = new SingleLinkedList();
