// Create an empty set using a Set constructor
let mySet = new Set();

// Add elements to the set using the add method
mySet.add(1);
mySet.add(2);
console.log(mySet);
console.log(mySet.size); // To get the size, use the size property

console.log(mySet.has(1)); // Check if an element is in the set
console.log(mySet.has(2));
console.log(mySet.has(3));

mySet.delete(2); // Remove an element from the set
console.log(mySet.has(2));

// Convert a list to a set
let myList = [1, 2, 3];
let mySetFromList = new Set(myList);
console.log(mySetFromList);

// Set comprehension doesn't exist in JavaScript, but you can achieve a similar result using the Set constructor and a loop
mySet = new Set();
for (let i = 0; i < 5; i++) {
    mySet.add(i);
}
console.log(mySet);
