var haystack = "hello"
var needle = "ll"

// var s = haystack.slice(0,needle.length);
// console.log(s);
// var s = haystack.slice(1,needle.length+1);
// console.log(s);
// var s = haystack.slice(2,needle.length+2);
// console.log(s);
// var s = haystack.slice(3,needle.length+3);
// console.log(s);
// var s = haystack.slice(4,needle.length+4);
// console.log(s);


// var strStr = function(haystack, needle) {
//     for(let i = 0; i <haystack.length;i++){
//         let s = haystack.slice(i,needle.length+i);
//         if(needle == s) {
//             return i;
//             break;
//         }
//     }
//     return -1;
// };

var strStr = function(haystack, needle) { //cheating way
    if(haystack.includes(needle))
    return (haystack.indexOf(needle)); 
    else
    return -1;
};

console.log(strStr(haystack,needle));