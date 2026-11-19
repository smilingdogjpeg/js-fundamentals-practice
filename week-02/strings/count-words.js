function countWords(sentence) {
    const words = sentence.split(" ").filter(word => word !== "" );
    return words.length;
}

console.log(countWords("The quick brown fox")); // expected: 4
console.log(countWords("hello"));               // expected: 1
console.log(countWords(""));                    // expected: 0
console.log(countWords(" "));                   // expected: 0
console.log(countWords("hello  world"));        // expected: 2
console.log(countWords(" hello "));             // expected: 1