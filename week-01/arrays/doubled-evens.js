const numbers = [1, 2, 3, 4];

function doubledEvens(numbers){
    const doubledEvenNumbers = numbers
        .filter(number => number % 2 === 0)
        .map(number => number * 2);

    return doubledEvenNumbers
}

console.log(doubledEvens(numbers), numbers);
