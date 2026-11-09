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

Each file is a single exercise, named after what it does. Commit messages describe the concept practised.

## Topics covered so far

### Week 1: Arrays
- `.filter()`: keeping elements that pass a test, returning a new array
- `.map()`: transforming every element, returning a new array of the same length
- `.forEach()`: running side effects (and why it returns `undefined`)
- Chaining array methods
- `.reduce()`: accumulating an array into a single value, including the initial value and the empty-array case
- Mutation vs. non-mutating methods, and checking the original array is unchanged
- Truthy and falsy values, and the remainder operator (`%`) with negative numbers

## Running the code

Requires [Node.js](https://nodejs.org/).

```bash
node week-01/arrays/<file-name>.js
```

## Up next

- Guard clauses and handling edge cases (e.g. empty arrays)
- Objects, strings and further array methods
- Asynchronous JavaScript
- Testing with Jest
