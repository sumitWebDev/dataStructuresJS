


//Add new node at head
MyLinkedList.prototype.addAtHead = function (val){
    let newNode = new Node (val);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
}


//Add new node at Tail
MyLinkedList.prototype.addAtTail = function (val){
    let newNode = new Node (val);
    if(this.head == null){
        this.head = newNode;
    }
    else {
        let current = this.head;
        while (current.next != null){
            current = current.next;
        }
        current.next = newNode;
    }
    this.size++;
}

//Add new node at an Index
MyLinkedList.prototype.addAtTail = function (index,val){
    if(index == 0){
        addAtHead(val);
        return
    }
    else if(index == this.size){
        addAtTail(val);
        return
    }
    else{
        let newNode = new Node(val);
        let current = this.head;
        while (current != index-1){
           current = current.next;
        }
        newNode.next = current.next;
        current.next = newNode 
        this.size++;
    }

}

var Node = function(val){
    this.val = val;
    this.next = null;
}


var MyLinkedList = function() {
    this.head = null;
    this.size= 0;
};

var obj = new MyLinkedList();
obj.addAtHead(5) 