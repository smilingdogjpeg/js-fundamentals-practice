const numbers = [1,2,3,4];

function sumOf(numbers){
    return numbers.reduce((accumulator, currentValue) => {
        console.log(accumulator, currentValue);
        return accumulator + currentValue;
    }, 0);
}

console.log(sumOf(numbers))

console.log([].reduce((accumulator, currentValue) => accumulator + currentValue, 0));
