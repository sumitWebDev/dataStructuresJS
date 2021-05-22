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
}


var list = new SingleLinkedList();
