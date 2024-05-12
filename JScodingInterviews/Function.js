// Simple function
function myFunc(n, m) {
    return n * m;
}

console.log(myFunc(3, 4)); // 12

// Nested functions with access to outer variables
function outer(a, b) {
    let c = "c";

    function inner() {
        return a + b + c;
    }

    return inner();
}

console.log(outer("a", "b")); // "abc"

// Modifying objects but not reassigning
function double(arr, val) {
    function helper() {
        // Modifying the array works
        for (let i = 0; i < arr.length; i++) {
            arr[i] *= 2;
        }

        // Modifying val in the helper scope
        // will not affect the outer val
        // val *= 2;

        // To modify val outside the helper scope, use let to declare it
        val *= 2;
    }

    helper();
    console.log(arr, val);
}

let nums = [1, 2];
let val = 3;
double(nums, val); // [2, 4] 6