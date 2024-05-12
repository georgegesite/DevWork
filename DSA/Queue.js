class Queue {
    constructor() {
      this.items = [];
    }
  
    // Enqueue an item at the back of the queue
    enqueue(item) {
      this.items.push(item);
    }
  
    // Dequeue an item from the front of the queue and return it
    dequeue() {
      if (!this.isEmpty()) {
        return this.items.shift();
      } else {
        console.log("Queue is empty.");
        return undefined;
      }
    }
  
    // Peek at the front item of the queue without removing it
    peek() {
      if (!this.isEmpty()) {
        return this.items[0];
      } else {
        console.log("Queue is empty.");
        return undefined;
      }
    }
  
    // Check if the queue is empty
    isEmpty() {
      return this.items.length === 0;
    }
  
    // Get the size (number of items) of the queue
    size() {
      return this.items.length;
    }
  
    // Clear the queue
    clear() {
      this.items = [];
    }
  }
  
  // Example usage:
  const queue = new Queue();
  
  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);
  
  console.log("Queue:", queue.items); // Output: [1, 2, 3]
  
  console.log("Dequeue:", queue.dequeue()); // Output: 1
  
  console.log("Peek:", queue.peek()); // Output: 2
  
  console.log("Is empty:", queue.isEmpty()); // Output: false
  
  console.log("Size:", queue.size()); // Output: 2
  
  queue.clear();
  console.log("Queue after clear:", queue.items); // Output: []
  