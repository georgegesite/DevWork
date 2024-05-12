var isValid = function(s) {
    const hashmap = {   // declare hasmap of parenthesis
        "(": ")",
        "[": "]",
        "{": "}"
    };
    const stack = []; // declare and empty stack

    if (s === "" || s.length % 2 !== 0) {
        return false; // if s is null or ss is odd, return false
    }

    for (let i = 0; i < s.length; i++) { //travers through string
        if (s[i] in hashmap) {  // if character is in hashmap, push to stack
            stack.push(s[i]);
        } else {
            let topElement = stack.pop(); //pop stack to check equality, if not equal return false 
            if (hashmap[topElement] !== s[i]) {
                return false;
            }
        }
    }

    return stack.length === 0; // stack should be empty to determine if it is true
};


var s = "(()){}[]"
console.log(` Check if The string ${s} is valid: `,isValid(s));
var s2 = "{}{(){{{]}"
console.log(` CHeck if The string ${s2} is valid:`,isValid(s2))