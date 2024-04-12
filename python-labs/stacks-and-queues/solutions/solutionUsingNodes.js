
/*******
 stacks
 *******/

class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
  }
  
  class Stack {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    push(val){
        let newNode = new Node(val);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        } else {
            let temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }
        return ++this.size;
    }
    pop(){
        if(!this.first) return null;
        let temp = this.first;
        if(this.first === this.last){
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
  }
  
  
  let node1 = new Node("Hi")
  let node2 = new Node("How are you?")
  let node3 = new Node("What's your name?")
  let stack = new Stack()
  stack.push(node1)
  stack.push(node2)
  stack.push(node3)
  let removed = stack.pop()
  console.log(removed) // LIFO => "What's your name?"
  console.log(stack)
  




  
/*******
 queues
 *******/

class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
  }
  
  class Queue {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    enqueue(val){
        var newNode = new Node(val);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.size;
    }
  
    dequeue(){
        if(!this.first) return null;
  
        var temp = this.first;
        if(this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
  }
  
  
  let node1 = new Node("Hi")
  let node2 = new Node("How are you?")
  let node3 = new Node("What's your name?")
  let queue = new Queue()
  queue.enqueue(node1)
  queue.enqueue(node2)
  queue.enqueue(node3)
  let removed = queue.dequeue()
  
  console.log(removed) // FIFO => "Hi"
  console.log(queue)