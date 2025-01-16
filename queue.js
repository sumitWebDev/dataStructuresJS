class Queue{
    constructor(){
        this.queue = [];
    }

    //enqueue sets data inside Queue
    enqueue(data){
        this.queue.push(data)
    }

    //dequeue or spell as 'Deck' pops data from the Queue
    dequeue(data){
        if(!this.isEmpty()) return this.queue.shift();
    }

    isEmpty(){
        return this.queue.length === 0
    }

    peek(){
        if(!this.isEmpty()) return this.queue[0]
    }

    size(){
        return this.queue.length
    }

    clear(){
        this.queue = [];
    }

    print(){
        let queue = '';
        for(let i =0 ;i < this.queue.length ;i++){
            queue += this.queue[i]+' \n';
        }
        return queue
    }
}

//Usage Example
let myQueue = new Queue();
myQueue.enqueue(20);
myQueue.enqueue(30);
myQueue.enqueue(40);
myQueue.enqueue(50);
myQueue.dequeue();

console.log(myQueue.print())