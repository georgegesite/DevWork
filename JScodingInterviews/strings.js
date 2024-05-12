// Strings are similar to arrays in JavaScript
let s = "abc";
console.log(s.slice(0, 2)); // "ab"

// Strings in JavaScript are immutable as well
// s[0] = "A"; // This line would cause an error

// To modify a string, you can create a new one
s += "def";
console.log(s); // "abcdef"

// Valid numeric strings can be converted to numbers
console.log(parseInt("123") + parseInt("123")); // 246

// Numbers can be converted to strings
console.log(String(123) + String(123)); // "123123"

// To get the ASCII value of a character, you can use charCodeAt
console.log("a".charCodeAt(0)); // 97
console.log("b".charCodeAt(0)); // 98

// Combine an array of strings using the join method
let strings = ["ab", "cd", "ef"];
console.log(strings.join("")); // "abcdef"

let example = "hello"
console.log(example.concat("world", "")); // can take many inputs separated by comma