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

    get(index){
    if(index > this.length && index < 0) return null
    var current = this.head;
    var count = 0;
        while(current.next){
            if(count < index){
                current = current.next;    
                count++
            }
            else break;

        }
        return current 
    }

    set(index,value){
        if(index > this.length && index < 0) return null
        var current = this.head;
        var count = 0;
        while(count != index){
            current = current.next;
            count++;
        }
        current.val = value 
        return this
    }

insert(index,value){
    if(index > this.length && index < 0) return false
    if(index == 0) this.unshift(value)
    if(index == this.length-1) this.push(value)
    var prevNode = this.get(index-1);
    var futureNode = prevNode.next;
    var insertedNode = new Node(value);
    prevNode.next = insertedNode;
    insertedNode.next = futureNode;
    this.length++
    return this 
}
remove(index){
    if(index > this.length && index < 0) return false
    if(index == 0) this.shift()
    if(index == this.length-1) this.pop()
    var prevNode = this.get(index-1);
    var next2nextNode = prevNode.next.next;
    prevNode.next = next2nextNode;
    this.length--;
    return this
}
  
}


var list = new SingleLinkedList();
list.push(10);
list.push(20);
list.push(30);
list.push(40);