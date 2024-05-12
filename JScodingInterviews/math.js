// Division is decimal by default
console.log(5 / 2);

// Double slash (floor division) rounds down
console.log(Math.floor(5 / 2));

// For negative numbers, it also rounds towards zero
console.log(Math.floor(-3 / 2));

// A workaround for rounding towards zero
// is to use decimal division and then convert to int.
console.log(Math.floor(-3 / 2));

// Modulo operation is similar to Python
console.log(10 % 3);

// Except for negative values, which can be handled like this:
console.log(((10 % 3) + 3) % 3);

// More math helpers
console.log(Math.floor(3 / 2));
console.log(Math.ceil(3 / 2));
console.log(Math.sqrt(2));
console.log(Math.pow(2, 3));

// JavaScript also has special values for positive and negative infinity
console.log(Number.POSITIVE_INFINITY);
console.log(Number.NEGATIVE_INFINITY);

// JavaScript numbers can reach infinity, but they still have limits
console.log(Math.pow(2, 200) === Number.POSITIVE_INFINITY); // true

// Negative infinity
console.log(Math.pow(2, -200) === 0); // true
