// Create an "immutable" tuple-like object
const tup = Object.freeze([1, 2, 3]);
console.log(tup);
console.log(tup[0]);
console.log(tup[tup.length - 1]);

// Attempting to modify the tuple will not work due to Object.freeze
// tup[0] = 0; // This line would cause an error

// Create a map (object) using the tuple as a key
const myMap = {};
myMap[tup] = 3;
console.log(myMap[Object.freeze([1, 2, 3])]); // Accessing using a similar frozen tuple

// Create a set using the tuple
const mySet = new Set();
mySet.add(Object.freeze([1, 2]));
console.log(mySet.has(Object.freeze([1, 2]))); // Checking for existence

// Lists (arrays) cannot be used as keys directly in JavaScript objects
// const myMap2 = {};
// myMap2[[3, 4]] = 5; // This line would not work
