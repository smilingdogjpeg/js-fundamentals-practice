const nums = [10, 1, 5, 100];
const sorted = nums.sort();
console.log(sorted);
console.log(nums === sorted);

const a = [].reduce((acc, n) => acc + n, 0);
console.log(a);

//const b = [].reduce((acc, n) => acc + n);
//console.log(b);

const values = [1, 2, 3, 4];
console.log(values.map(n => n % 2 === 0));
console.log(values.filter(n => n % 2 === 0));

const words = ["banana", "fig", "apple"];

words.sort((a, b) => {
    console.log(`comparing ${a} and ${b}`);
    if (a.length < b.length) return -1;
    if (a.length > b.length) return 1;
    return 0;
});

console.log(words);

const sortedNums = nums.toSorted((c,d) => {
    console.log(`comparing ${c} and ${d}`);
    return d - c;
});

console.log(sortedNums);
console.log(nums === sortedNums);
console.log(nums);

