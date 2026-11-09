const numbers = [1,3,4,7];

function doubleNumbers(numbers){
    const doubled = numbers.map(number => number * 2) ;
    return doubled;
}

console.log(doubleNumbers(numbers), numbers)

console.log([1, 3, 4, 7].filter(number=> number % 2 === 0))