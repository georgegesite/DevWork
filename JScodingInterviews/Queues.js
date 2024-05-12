// Create an empty queue (double-ended queue) using an array
let queue = [];

// Enqueue elements by using push
queue.push(1);
queue.push(2);
console.log(queue);

// Dequeue elements by using shift
queue.shift();
console.log(queue);

// Add elements to the front of the queue by using unshift
queue.unshift(1);
console.log(queue);

// Remove elements from the end of the queue by using pop
queue.pop();
console.log(queue);