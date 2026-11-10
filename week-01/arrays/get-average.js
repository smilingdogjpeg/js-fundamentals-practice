const numbers = [1, 2, 3, 4];

function getAverage(numbers) {
    if (numbers.length === 0) {
        throw new Error("Cannot average an empty array");
    }
    const initialValue = 0;
    const total = numbers.reduce(
        (accumulator, currentValue) =>
            accumulator + currentValue, initialValue
        );
    return total / numbers.length;

}

console.log(getAverage(numbers));