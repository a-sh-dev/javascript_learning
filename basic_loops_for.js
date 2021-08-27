// ! Basic Syntax 'for' loop
for (initialExpression; condition; updateExpression) {
  // for loop body
}

// ! Display a text five times
// program to display text 5 times
const n = 5;

// looping from i = 1 to 5
for (let i = 1; i <= n; i++) {
  console.log("I love JavaScript!");
}

// * Display numbers from 1 to 5
// looping from i = 1 to 5
// in each iteration, i is increased  by 1
for (let i = 1; i <= n; i++) {
  console.log(i); // printing the value i
}

// * Display sum of n Natural numbers
// program to display the sum of natural numbers
let sum = 0;
const maxN = 100;

// looping from i = 1 to maxN
// in each itration, i is increased by 1
for (let i = 1; i <= maxN; i++) {
  sum += i; // sum = sum + i
}

console.log("sum: ", sum);

// output: sum: 5050

// * Can also be written as:
// looping from i = maxN to i
// in each iteration, i is decreased by 1
for (let i = maxN; i >= 1; i--) {
  // adding i to sum in each iteration
  sum += i; // sum = sum + i
}

console.log("sum: ", sum);
