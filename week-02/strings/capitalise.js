function capitalise(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

console.log(capitalise("rowan"));
console.log(capitalise("edinburgh"));
console.log(capitalise(""));


function capitaliseWords(sentence) {
    return sentence.split(" ").map(capitalise).join(" ");
}

console.log(capitaliseWords("the quick brown fox"));
console.log(capitaliseWords("mr bean"));
console.log(capitaliseWords("edinburgh"));