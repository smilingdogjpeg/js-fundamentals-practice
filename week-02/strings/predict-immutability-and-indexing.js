const greeting = "hello";
greeting[0] = "J";
console.log(greeting);
// Prediction: hello
// Actual: hello


let name = "fox";
name = name.toUpperCase();
console.log(name);
// Prediction: FOX
// Actual: FOX


const pet = "dog";
console.log(pet[3]);
// Prediction: undefined
// Actual: undefined


const word = "banana";
console.log(word.length - 1, word[word.length -1]);
// Prediction: 5 a
// Actual: 5 a


const animal ="fox";
const shout =animal.toUpperCase();
console.log(animal, shout);
// Prediction: fox FOX
// Actual: fox FOX


const text = "coding";
console.log(text[text.length - 2])
// Prediction: n
// Actual: n
