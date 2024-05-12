// Under the hood, we can use arrays to simulate a min-heap
let minHeap = [];
minHeap.push(3);
minHeap.push(2);
minHeap.push(4);

// Min is always at index 0
console.log(minHeap[0]);

while (minHeap.length > 0) {
    console.log(minHeap.shift());
}

// JavaScript doesn't have built-in max-heaps, so we can use min-heap with negation
let maxHeap = [];
maxHeap.push(-3);
maxHeap.push(-2);
maxHeap.push(-4);

// Max is always at index 0
console.log(-maxHeap[0]);

while (maxHeap.length > 0) {
    console.log(-maxHeap.shift());
}

// Build a heap from initial values
let arr = [2, 1, 8, 4, 5];

// JavaScript doesn't have a built-in heapify function, so we can build a heap manually
function buildHeap(arr) {
    for (let i = Math.floor(arr.length / 2); i >= 0; i--) {
        heapify(arr, i);
    }
}

function heapify(arr, index) {
    let left = 2 * index + 1;
    let right = 2 * index + 2;
    let largest = index;

    if (left < arr.length && arr[left] > arr[largest]) {
        largest = left;
    }

    if (right < arr.length && arr[right] > arr[largest]) {
        largest = right;
    }

    if (largest !== index) {
        [arr[index], arr[largest]] = [arr[largest], arr[index]]; // Swap elements
        heapify(arr, largest);
    }
}

buildHeap(arr);

while (arr.length > 0) {
    console.log(arr.shift());
}
