// Variables are dynamically typed
let n = 0;
console.log('n =', n); // n = 0

n = "abc";
console.log('n =', n); // n = abc

// Multiple assignments
let n = 0, m = "abc";
let n = 0.125, m = "abc", z = false;

// Increment
n = n + 1; // good
n += 1;    // good
// In JavaScript, there is no "++" operator for numbers like in some other languages
// You can use n++ for incrementing, but it's considered less readable in some cases

// None is equivalent to "null" in JavaScript (represents the absence of a value)
let n = 4;
n = null;
console.log("n =", n); // n = null
