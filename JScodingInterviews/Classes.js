// Define a JavaScript class
class MyClass {
    // Constructor
    constructor(nums) {
        // Create member variables
        this.nums = nums;
        this.size = nums.length;
    }

    // Methods
    getLength() {
        return this.size;
    }

    getDoubleLength() {
        return 2 * this.getLength();
    }
}

// Create an instance of the class
let myObj = new MyClass([1, 2, 3]);

// Access and call methods on the instance
console.log(myObj.getLength()); // 3
console.log(myObj.getDoubleLength()); // 6
