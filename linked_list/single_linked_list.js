var MyLinkedList = function() {
    this.head = null;
    this.size= 0;
};

var Node = function(val){
    this.val = val;
    this.next = null;
}

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
MyLinkedList.prototype.addAtIndex = function (index,val){
    if(index<0 || index > this.size) return
    if(index == 0){
        this.addAtHead(val);
        return
    }
    else if(index == this.size){
        this.addAtTail(val);
        return
    }
    else{
        let newNode = new Node(val);
        let current = this.head;
        let count = 0;
        while (count < index-1){
           current = current.next;
            count++;
        }   
        newNode.next = current.next;
        current.next = newNode 
        this.size++;
    }
}


//Get an Element at an Index
MyLinkedList.prototype.get = function (index){
    let current = this.head;
    if(index < 0 || index >= this.size) return -1;
    let count = 0;
        while(count < index){
            current = current.next;
            count++
        }
        return current.val;
}


//Delete an Index 
MyLinkedList.prototype.delete = function (index){
    if(index<0 || index >= this.size) return
    if(index == 0){this.head = this.head.next}
    else{
        let current = this.head;
        let count = 0;
        while(count < index-1){
            current = current.next;
            count++
        }
        current.next = current.next.next;
    }
    this.size--;
}






var obj = new MyLinkedList();
obj.addAtHead(7); 
obj.addAtHead(2);
obj.addAtHead(1);
obj.addAtIndex(3,3);
// obj.delete(2);
// obj.addAtHead(6);
// obj.addAtTail(4);
console.log(obj); 
console.log(obj.get(3)); 