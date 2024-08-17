// console.log(decodeURI("path/to/object/QA125_%E6%8B%A1%E5%BC%B5%E5%80%8B%E4%BA%BA%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB.zip"));
// console.log(decodeURIComponent("path/to/object/QA125_%E6%8B%A1%E5%BC%B5%E5%80%8B%E4%BA%BA%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB.zip"));

// console.log(" ");
// console.log(encodeURI("C1000618L_入院費"));
// console.log(encodeURIComponent("C1000618L_入院費"));

// console.log(" ");
// var decodeText1 = decodeURIComponent( 
//     'http://www.testing.com/'); 
// console.log(decodeText1); 

// var decodeText2 = decodeURIComponent( 
// 'http%3A%2F%2Fwww.testing.com%2F'); 
// console.log(decodeText2); 

// console.log(" ");
// uri = "https://www.educative.io/learning tō dėcōdė"

// encoded_complete_uri = encodeURI(uri)
// decode_uri = decodeURI(encoded_complete_uri)
// decode_uri_component = decodeURIComponent(encoded_complete_uri)

// console.log("Complete uri being used: ", uri)
// console.log("decodeURI: ", decode_uri )
// console.log("decodeURIComponent: ", decode_uri_component)

// console.log(encodeURI("/distirbutionfile/work/QA125/C1000618L_入院費"));
// console.log(encodeURIComponent("/distirbutionfile/work/QA125/C1000618L_入院費"));
var encodedText = encodeURI("001_test - コピー");
console.log(encodedText)
console.log(decodeURI(encodedText));
console.log(decodeURIComponent(encodedText));

var encodedText2 = encodeURIComponent("001_test - コピー");
console.log(encodedText2)
console.log(decodeURI(encodedText2));
console.log(decodeURIComponent(encodedText2));