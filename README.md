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
  objects/
    ...
  arrays-of-objects/
    ...
```

Each file is a single exercise, named after what it does. Commit messages describe the concept practised.

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

#### Objects
- Objects as collections of named properties (key–value pairs), and when to use them instead of arrays
- Dot notation vs bracket notation: bracket notation evaluates an expression, so the key can come from a variable
- Reading a missing property returns `undefined`; reading a property *of* `undefined` throws a `TypeError`
- Updating, adding and deleting properties
- Properties vs variables: properties belong to an object and aren't in scope on their own
- `const` prevents reassigning the variable, not changing the object it references
- References: primitives are copied by value; objects and arrays are copied by reference
- Spread syntax (`...`) for copying arrays and objects, and for copying while overriding a property
- Shallow vs deep copies:
  - `{ ...obj }` copies nested arrays and objects by reference, so they stay shared
  - Copying each level that leads to the data being changed: `{ ...team, players: [...team.players] }`
  - Deep copying with `structuredClone()`, and the limitations of `JSON.parse(JSON.stringify(...))`

#### Arrays of objects
- Zero-based indexing and off-by-one errors; `arr.at(-1)` for the last element
- `.map()` and `.filter()` on objects, and chaining them (each method works on the previous step's result)
- `getTeamNames`: extracting one property from every object
- `getTotalPoints`: summing a property with `.reduce()` and an initial value
  - Type coercion: why adding an object gives `"[object Object]"`
- `getLeaderboard`: a non-mutating, multi-criteria sort
  - Points highest first, with ties broken by name A–Z
  - String comparison with `<` / `>` and `localeCompare()`
  - Dry-running a compare function by hand for each branch
  - Debugging a missing `return` that left tied teams in their original order

#### Language fundamentals
- The ternary operator
- Truthy and falsy values, and the remainder operator (`%`) with negative numbers
- Error handling: throwing errors with `throw new Error(...)` and catching them with `try`/`catch`
  - Guard clauses that reject invalid input (such as empty arrays), with the caller deciding how to respond
- Functions and scope:
  - Parameters vs arguments: a parameter is a new local variable filled by the argument
  - Scope lookup from the inside out, and shadowing
  - Pure functions: using parameters instead of outer variables, so functions are reusable and testable
  - Hoisting of function declarations, and the temporal dead zone for `let` and `const`
  - Functions without a `return` give back `undefined`

## Running the code

Requires [Node.js](https://nodejs.org/).

```bash
node week-01/<topic>/<file-name>.js
```

## Up next

- Week 1 review: mock interview questions
- Strings and further array methods
- Asynchronous JavaScript
- Testing with Jest