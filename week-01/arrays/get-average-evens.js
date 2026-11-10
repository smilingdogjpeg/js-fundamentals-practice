const input = [1,2,3,4,5,6];

function getAverageOfEvens(input){
    const evens = input.filter(number => number % 2 === 0);
    if (input.length === 0) {
        throw new Error("Cannot average an empty array")
    }
    if (evens.length === 0){
        throw new Error("This array contains only odd numbers")
    }
    const initialValue = 0
    const avgEvens = evens.reduce(
        (accumulator, currentValue) =>
            accumulator + currentValue, initialValue
    );
    return avgEvens / evens.length;
}
try {
    console.log(getAverageOfEvens(input))
} catch (error){
    console.log(error.message);
}