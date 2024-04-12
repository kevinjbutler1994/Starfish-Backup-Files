
/************
 stacks array 
 ************/

class Stack {
    constructor() {
      this.items = []
    }
  
    push(item){
      this.items.push(item)
    }
  
    pop(){
      return this.items.pop()
    }
  
    peek(){
      return this.items[this.items.length - 1]
    }
  
    isEmpty(){
      return this.items.length === 0
    }
  }
  
  const ourStack = new Stack()
  ourStack.push('ahsik')
  ourStack.push('kp')
  ourStack.push('juan')
  ourStack.pop()
  console.log(ourStack.peek())
  console.log(ourStack.isEmpty())
  
  
  /************
   stacks object
   ************/
  class Stack {
    constructor() {
      this.storage = {}
      this.tail = 0
    }
  
    push(element) {
      this.storage[this.tail] = element
      this.tail++
    }
  
    pop() {
      let removed = this.storage[this.tail - 1]
      delete this.storage[this.tail - 1]
      this.tail--
      return removed
    }
  
    peek() {
      return this.storage[this.tail - 1]
    }
  }
  
  const stack = new Stack()
  
  stack.push("dog")
  stack.push("cat")
  stack.push("bear")
  console.log(stack)
  stack.pop()
  console.log(stack)
  stack.peek()
  console.log(stack.peek())

  


  
  /************
   queues array
   ************/

  class Queue {
    constructor() {
        this.items = []
    }

    enqueue(data) {
        this.items.push(data)
    }

    dequeue() {
        return this.items.shift()
    }

    peek() {
        return this.isEmpty() ? 'empty list!' : this.items[0]
    }

    isEmpty(){
        return this.items.length === 0
    }
}


const ourQueue = new Queue()

ourQueue.enqueue('Sandy')
ourQueue.enqueue('Bruno')
ourQueue.enqueue('Megan')
let myReturnedShift = ourQueue.dequeue()
console.log('myReturn', myReturnedShift)
console.log(ourQueue.peek())
console.log(ourQueue)


/************
queues object
************/

class Queue {
    constructor() {
      this.storage = {}
      this.head = 0
      this.tail = 0
    }
  
    enqueue(element) {
      this.storage[this.tail] = element
      this.tail++
    }
  
    dequeue() {
      let removed = this.storage[this.head]
      delete this.storage[this.head]
      this.head++
      return removed
    }
  }
  
  const queue = new Queue()
  
  queue.enqueue('seahorse')
  queue.enqueue('dolphin')
  queue.enqueue('whale shark')

  console.log(queue)