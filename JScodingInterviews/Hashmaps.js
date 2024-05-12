// Create an empty object (HashMap)
let myMap = {};

// Add key-value pairs to the object
myMap["alice"] = 88;
myMap["bob"] = 77;
console.log(myMap);
console.log(Object.keys(myMap).length);

// Update a value for a key
myMap["alice"] = 80;
console.log(myMap["alice"]);

// Check if a key exists in the object
console.log("alice" in myMap);

// Remove a key-value pair from the object
delete myMap["alice"];
console.log("alice" in myMap);

// Another way to create an object with key-value pairs
myMap = { "alice": 90, "bob": 70 };
console.log(myMap);

// Dictionary comprehension doesn't exist in JavaScript, but you can achieve a similar result using a loop
myMap = {};
for (let i = 0; i < 3; i++) {
    myMap[i] = 2 * i;
}
console.log(myMap);

// Looping through object keys (similar to Python's for key in dict)
for (let key in myMap) {
    console.log(key, myMap[key]);
}

// Looping through object values
for (let val of Object.values(myMap)) {
    console.log(val);
}

// Looping through object key-value pairs
for (let [key, val] of Object.entries(myMap)) {
    console.log(key, val);
}
