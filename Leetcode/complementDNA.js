function dnaComplement(s) {
    var reversedString = "";
    for (var i = s.length - 1; i >= 0; i--) {
        var temp = s[i];
        switch (temp) {
            case 'T':
                reversedString += 'A';
                break;
            case 'A':
                reversedString += 'T';
                break;
            case 'C':
                reversedString += 'G';
                break;
            case 'G':
                reversedString += 'C';
                break;
            default:
                // Handle unknown characters, if needed
                reversedString += temp;  // You might want to add an error message or something else here
                break;
        }
    }
    return reversedString;
}

const inputDNA = "ATCGTTCCGGAAATGCGATGC";
const complement = dnaComplement(inputDNA);
console.log(complement);   
