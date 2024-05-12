// Define the Node class
class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  // Define the LinkedList class
  class LinkedList {
    constructor() {
      this.head = null;
      this.size = 0;
    }
  
    // Add a new node to the end of the list
 // Define a method named "append" for the LinkedList class
append(data) {
  // Create a new Node with the given data
  const newNode = new Node(data);

  // Check if the linked list is empty (no head node exists)
  if (!this.head) {
    // If it's empty, set the newly created node as the head of the list
    this.head = newNode;
  } else {
    // If the list is not empty, start at the head node
    let current = this.head;

    // Traverse the list to find the last node (where "next" is null)
    while (current.next!=null) {
      current = current.next;
    }

    // Once the last node is found, set its "next" pointer to the new node,
    // effectively adding the new node to the end of the list
    current.next = newNode;
  }

  // Increase the size of the linked list by 1 to reflect the addition of the new node
  this.size++;
}
  // Reverse the linked list
  reverse() {
    let prev = null;
    let current = this.head;
    let next = null;

    while (current !== null) {
      // Store the next node
      next = current.next;
      // Reverse the pointer of the current node
      current.next = prev;
      // Move prev and current one step forward
      prev = current;
      current = next;
    }

    // Update the head of the reversed list
    this.head = prev;
  }
  
    // Insert a new node at a specific position in the list
    insert(data, index) {
      if (index < 0 || index > this.size) {
        return false; // Invalid index
      }
  
      const newNode = new Node(data);
  
      if (index === 0) {
        newNode.next = this.head;
        this.head = newNode;
      } else {
        let current = this.head;
        let prev = null;
        let currentIndex = 0;
  
        while (currentIndex < index) {
          prev = current;
          current = current.next;
          currentIndex++;
        }
  
        newNode.next = current;
        prev.next = newNode;
      }
  
      this.size++;
      return true;
    }
  
    // Remove a node at a specific position in the list
    remove(index) {
      if (index < 0 || index >= this.size || !this.head) {
        return null; // Invalid index or empty list
      }
  
      let removedNode;
  
      if (index === 0) {
        removedNode = this.head;
        this.head = this.head.next;
      } else {
        let current = this.head;
        let prev = null;
        let currentIndex = 0;
  
        while (currentIndex < index) {
          prev = current;
          current = current.next;
          currentIndex++;
        }
  
        removedNode = current;
        prev.next = current.next;
      }
  
      this.size--;
      return removedNode.data;
    }
  
    // Get the size (number of nodes) of the list
    getSize() {
      return this.size;
    }
  
    // Convert the linked list to an array for easier display
    toArray() {
      const result = [];
      let current = this.head;
  
      while (current) {
        result.push(current.data);
        current = current.next;
      }
  
      return result;
    }

    merge(){
  
    }
  }
  
  // Example usage:
  const linkedList = new LinkedList();
  const linkedList2 = new LinkedList();
  
  linkedList.append(1);
  linkedList.append(2);
  linkedList.append(3);
  linkedList2.append(4);
  linkedList2.append(5);
  
  console.log(linkedList.toArray()); // Output: [1, 2, 3]
  console.log(linkedList2.toArray());
  
  linkedList.insert(4, 1); // Insert 4 at index 1
  console.log(linkedList.toArray()); // Output: [1, 4, 2, 3]
  
  linkedList.remove(2); // Remove node at index 2
  console.log(linkedList.toArray()); // Output: [1, 4, 3]
  
  console.log(linkedList.getSize()); // Output: 3
  linkedList.reverse();
  console.log("Reversed List:", linkedList.toArray()); // Output: [3, 2, 1]