class Stack {
    constructor() {
      this.items = [];
    }
  
    // Push an item onto the stack
    push(item) {
      this.items.push(item);
    }
  
    // Pop an item from the stack and return it
    pop() {
      if (!this.isEmpty()) {
        return this.items.pop();
      } else {
        console.log("Stack is empty.");
        return undefined;
      }
    }
  
    // Peek at the top item of the stack without removing it
    peek() {
      if (!this.isEmpty()) {
        return this.items[this.items.length - 1];
      } else {
        console.log("Stack is empty.");
        return undefined;
      }
    }
  
    // Check if the stack is empty
    isEmpty() {
      return this.items.length === 0;
    }
  
    // Get the size (number of items) of the stack
    size() {
      return this.items.length;
    }
  
    // Clear the stack
    clear() {
      this.items = [];
    }
  }
  
  // Example usage:
  const stack = new Stack();
  
  stack.push(1);
  stack.push(2);
  stack.push(3);
  
  console.log("Stack:", stack.items); // Output: [1, 2, 3]
  
  console.log("Pop:", stack.pop()); // Output: 3
  
  console.log("Peek:", stack.peek()); // Output: 2
  
  console.log("Is empty:", stack.isEmpty()); // Output: false
  
  console.log("Size:", stack.size()); // Output: 2
  
  stack.clear();
  console.log("Stack after clear:", stack.items); // Output: []
  