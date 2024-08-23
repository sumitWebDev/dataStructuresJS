//Question - Implement basic Stack

class Stack{
    constructor(){
        this.stack = [];
    }

    push(data){
        this.stack.push(data)
    }

    pop(data){
        this.stack.pop(data)
    }


    //design a peek method to view the last element
    peek(){
        return this.stack[this.stack.length-1]
    }

    //check if the stack is empty
    isEmpty(){
        return this.stack.length === 0 ? true : false
    }

    //size of stack
    size(){
        return this.stack.length
    }

    //destroy all the elements in stack
    clear(){
        this.stack = []
    }

    //check if an element is present
    contain(element){
        return this.stack.includes(element)
    }
    //We can use array.find. Difference between includes and array.find is that array.find contains a function

    //reverse entire array
    reverse(){
        return this.stack.reverse();
    }

    //print all items in array
    print(){
        var str= '';
        for(let i =0; i<this.stack.length ; i++){
            str += this.stack[i]+'\n'
        }
        //Never ever console.log in the function just return. Console log the function eg (console.log(stack.print)) 
        return str
    }
}

//usage Example
var stack = new Stack();

//to push
stack.push(data)

//to pop
stack.pop(data)