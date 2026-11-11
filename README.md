# JavaScript Fundamentals Practice

A practice repository where I'm rebuilding and deepening my JavaScript fundamentals through small, focused exercises. It's a learning log, not a finished project: the point is steady, deliberate practice and being able to explain what each piece of code does and why.

## Why this exists

I completed the Northcoders software development bootcamp (JavaScript, TypeScript, Node.js, Express, React, PostgreSQL) and I'm now returning to the fundamentals to strengthen them properly before building more projects. I'm working through exercises one concept at a time, predicting the output before running the code, and testing my understanding by experimenting.

## Structure

Exercises are grouped by week, then by topic:

```
week-01/
  arrays/
    ...
```

Each file is a single exercise, named after what it does, apart from warmup.js which is used for quick experiments in a less formal style. Commit messages describe the concept practised.

## Topics covered so far

### Week 1

#### Arrays
- `.filter()`: keeping elements that pass a test, returning a new array
- `.map()`: transforming every element, returning a new array of the same length
- `.forEach()`: running side effects (and why it returns `undefined`)
- Chaining array methods
- `.reduce()`: accumulating an array into a single value
  - Sum, average and maximum, using the accumulator and an initial value
  - Choosing between an explicit initial value and the first element as the starting accumulator
- Combining `.filter()` and `.reduce()` (e.g. the average of only the even numbers)

#### Sorting and compare functions
- Default `.sort()` converts elements to strings and compares them lexicographically, so `[10, 1, 5, 100]` sorts to `[1, 10, 100, 5]`
- Compare functions: a two-parameter callback that returns a verdict about one pair; only the sign matters (negative: `a` first, positive: `b` first, zero: keep order)
- Numeric sorting with `(a, b) => a - b` (ascending) and `(a, b) => b - a` (descending)
- Implicit vs explicit returns in arrow functions
- Mutating vs non-mutating: `.sort()` vs `.toSorted()` and `[...arr].sort()`, checked with reference equality (`===`)
- Debugging a test where an earlier `.sort()` had already mutated a shared array

#### Language fundamentals
- The ternary operator
- Truthy and falsy values, and the remainder operator (`%`) with negative numbers
- Error handling: throwing errors with `throw new Error(...)` and catching them with `try`/`catch`
  - Guard clauses that reject invalid input (such as empty arrays), with the caller deciding how to respond

## Running the code

Requires [Node.js](https://nodejs.org/).

```bash
node week-01/<topic>/<file-name>.js
```

## Up next

- Objects and arrays of objects
- Strings and further array methods
- Asynchronous JavaScript
- Testing with Jest