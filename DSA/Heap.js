class MinHeap {
    constructor() {
      this.heap = [];
    }
  
    insert(value) {
      // Add the new value to the end of the array.
      this.heap.push(value);
      // Perform "heapify up" to maintain the heap property.
      this._heapifyUp(this.heap.length - 1);
    }
  
    extractMin() {
      if (this.isEmpty()) {
        return null;
      }
  
      // Swap the root (minimum) element with the last element.
      const minValue = this.heap[0];
      const lastValue = this.heap.pop();
  
      if (!this.isEmpty()) {
        this.heap[0] = lastValue;
        // Perform "heapify down" to maintain the heap property.
        this._heapifyDown(0);
      }
  
      return minValue;
    }
  
    isEmpty() {
      return this.heap.length === 0;
    }
  
    _heapifyUp(index) {
      while (index > 0) {
        const parentIndex = Math.floor((index - 1) / 2);
        if (this.heap[index] < this.heap[parentIndex]) {
          // Swap the current element with its parent if necessary.
          [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
          index = parentIndex; // Move up to the parent index.
        } else {
          break; // Heap property is satisfied.
        }
      }
    }
  
    _heapifyDown(index) {
      while (true) {
        const leftChildIndex = 2 * index + 1;
        const rightChildIndex = 2 * index + 2;
        let smallestIndex = index;
  
        if (
          leftChildIndex < this.heap.length &&
          this.heap[leftChildIndex] < this.heap[smallestIndex]
        ) {
          smallestIndex = leftChildIndex;
        }
  
        if (
          rightChildIndex < this.heap.length &&
          this.heap[rightChildIndex] < this.heap[smallestIndex]
        ) {
          smallestIndex = rightChildIndex;
        }
  
        if (smallestIndex !== index) {
          // Swap the current element with the smallest child if necessary.
          [this.heap[index], this.heap[smallestIndex]] = [this.heap[smallestIndex], this.heap[index]];
          index = smallestIndex; // Move down to the smallest child index.
        } else {
          break; // Heap property is satisfied.
        }
      }
    }
  }
  
  // Example usage:
  const minHeap = new MinHeap();
  minHeap.insert(5);
  minHeap.insert(3);
  minHeap.insert(8);
  minHeap.insert(1);
  minHeap.insert(4);
  
  console.log(minHeap.extractMin()); // Output: 1
  console.log(minHeap.extractMin()); // Output: 3
  