class stack{
    constructor(){
        this.item={}
    }

    push(element){
        this.item.push(element)
    }

    pop(){
        if(!this.Empty()){
            return this.item.pop()
        }
        return null
    }

    isEmpty(){
        return this.item.length === 0
    }

    size(){
        return this.item.length
    }


}
 

// using  linkedlist





class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class Stack {
    constructor() {
      this.top = null;
    }
  
    isEmpty() {
      return this.top === null;
    }
  
    push(data) {
      const newNode = new Node(data);
      newNode.next = this.top;
      this.top = newNode;
    }
  
    pop() {
      if (this.isEmpty()) {
        return null;
      }
      const poppedData = this.top.data;
      this.top = this.top.next;
      return poppedData;
    }
  
    peek() {
      if (this.isEmpty()) {
        return null;
      }
      return this.top.data;
    }
  
    printStack() {
      let current = this.top;
      while (current !== null) {
        console.log(current.data);
        current = current.next;
      }
    }
  }
  
  // Example usage:
  const stack = new Stack();
  
  console.log("Is the stack empty? ", stack.isEmpty());
  
  stack.push(1);
  stack.push(2);
  stack.push(3);
  stack.push(7)
  
 stack.pop()
 console.log("annd")
  stack.printStack();
  
  