const numbers = [-2, -5, -8, -11];

function getMax(numbers){
   if (numbers.length === 0) {
       throw new Error("Cannot find maximum of an empty array")
   }
    return numbers.reduce(
        (accumulator, currentValue) =>
            currentValue > accumulator ? currentValue : accumulator
    );
}

console.log(getMax(numbers))