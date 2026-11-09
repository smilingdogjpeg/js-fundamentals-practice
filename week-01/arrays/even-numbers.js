const numbers = [1,2,3,4,5]

function getEvenNumbers(numbers){
    const evenNumbers = numbers.filter(number => number % 2 === 0)
    return evenNumbers;
}


console.log(getEvenNumbers(numbers), numbers)