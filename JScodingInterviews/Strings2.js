const str = 'Hello, World!';

// Accessing Characters
console.log(str.charAt(0)); // Output: 'H'
console.log(str.charCodeAt(0)); // Output: 72
console.log(str[0]); // Output: 'H' (ES6)

// String Length
console.log(str.length); // Output: 13

// Substring and Slicing
console.log(str.substring(0, 5)); // Output: 'Hello'
console.log(str.slice(7, 12)); // Output: 'World'
console.log(str.substr(7, 5)); // Output: 'World'

// Searching and Matching
console.log(str.indexOf('World')); // Output: 7
console.log(str.lastIndexOf('o')); // Output: 8
console.log(str.includes('Hello')); // Output: true
console.log(str.startsWith('Hello')); // Output: true
console.log(str.endsWith('!')); // Output: true
console.log(str.match(/[A-Z]/g)); // Output: ['H', 'W']

// Replacing and Modifying
console.log(str.replace('World', 'Universe')); // Output: 'Hello, Universe!'
console.log(str.toUpperCase()); // Output: 'HELLO, WORLD!'
console.log(str.toLowerCase()); // Output: 'hello, world!'
console.log('   trim me    '.trim()); // Output: 'trim me'
console.log(str.concat(' Have a nice day!')); // Output: 'Hello, World! Have a nice day!'

// Splitting and Joining
console.log(str.split(', ')); // Output: ['Hello', 'World!']
console.log(['Hello', 'Universe!'].join(', ')); // Output: 'Hello, Universe!'

// Checking and Validation
console.log(isNaN('123')); // Output: false
console.log(isNaN('abc')); // Output: true
console.log(isNaN(parseFloat('123.45'))); // Output: false
console.log(isNaN(parseInt('123.45'))); // Output: false

// String Interpolation (ES6)
const name = 'Alice';
console.log(`Hello, ${name}!`); // Output: 'Hello, Alice!'

// Encoding and Decoding
console.log(encodeURI('https://www.example.com')); // Output: 'https://www.example.com'
console.log(encodeURIComponent('https://www.example.com?q=JavaScript')); // Output: 'https%3A%2F%2Fwww.example.com%3Fq%3DJavaScript'
console.log(decodeURI('https%3A%2F%2Fwww.example.com')); // Output: 'https://www.example.com'
console.log(decodeURIComponent('https%3A%2F%2Fwww.example.com%3Fq%3DJavaScript')); // Output: 'https://www.example.com?q=JavaScript'
