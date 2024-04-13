
class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class Queue {
    constructor() {
      this.front = null;
      this.rear = null;
    }
  
    isEmpty() {
      return this.front === null;
    }
  
    enqueue(data) {
      const newNode = new Node(data);
      if (this.isEmpty()) {
        this.front = newNode;
        this.rear = newNode;
      } else {
       
        this.rear.next = newNode;
        this.rear = newNode;
      }
      
      console.log("hhhhhhhhhhhhhhhhh")
      // console.log(this.rear)
      console.log(this.front)
    }
  
  
    dequeue() { 
      if (this.isEmpty()) {
        return null;
      }
      const dequeuedData = this.front.data;
      console.log( this.front.data)
      this.front = this.front.next;
      if (this.front === null) {
        this.rear = null;
      }
      return dequeuedData;
    }
  
    peek() {
      if (this.isEmpty()) {
        return null;
      }
      return this.front.data;
    }
  
    printQueue() {
      let current = this.front;
      while (current !== null) {
        console.log(current.data);
        current = current.next;
      }
    }
  }
  
  
  const queue = new Queue();
  
  
  
  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);
  queue.dequeue()
  
  // queue.printQueue();
  