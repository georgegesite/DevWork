var hashmap = {
    "google":"2"
};

// add item to hashmap


hashmap["number 1"]  = "1"
const temp  ="number 1";
const temp2 = "1";
console.log(hashmap);
//check if can use key or value for conditional statements
console.log(temp in hashmap);
console.log(temp2 in hashmap);

//print value or key
console.log(hashmap[temp]); // returns the value when using key
console.log(hashmap[temp2]);// cannot use value to check hashmap
