// ! Callbacks -> any functions passed in as an argument to another function

function add(x, y) {
  console.log(`${x} + ${y} = ${x + y}`);
  return x + y;
}

function subtract(x, y) {
  console.log(`${x} - ${y} = ${x - y}`);
  return x - y;
}

function multiply(x, y) {
  console.log(`${x} * ${y} = ${x * y}`);
  return x * y;
}

// Callback functions
function calculate(arg1, arg2, callback) {
  return callback(arg1, arg2);
}

// fat arrows function is not hoisted
const calculate1l = (arg1, arg2, callback) => callback(arg1, arg2);

let answer = calculate(5, 10, add);
// calculate(10, 20, multiply);
console.log(answer);

// ! Callbacks with Array methods
let students = ['Alice', 'Momo', 'Kenzo'];

// Way to iterate can be (old school before ES6):
// for (let student of students) {
//   console.log(`Hello ${student}`);
// }

// * More functional way:
students.forEach(student => console.log(`Hello ${student}`));

// * Even better:
function greet(name) {
  console.log(`Hello ${name}`);
}

// * Something that Ruby can't do, passing in a function in a function as arguments!
students.forEach(greet);

let numbers = [3, 5, 8, 12, 33];

// * old school way BUT hard to read:
let doubledNumbers = [];
for (let i = 0; i < numbers.length; i++) {
  doubledNumbers.push(numbers[i] * 2);
}
console.log(doubledNumbers);

// * A BETTER WAY:
let doubledNumbers2 = numbers.map(num => num * 2);
console.log(doubledNumbers2);

// * Can also be done with:
function double(num) {
  return num * 2;
}

let doubledNumbers3 = numbers.map(double);
console.log(doubledNumbers3);

// ! FILTER
let educators = ['Alex', 'Ashleigh', 'Iryna', 'Alex H', 'Lavanya', 'Nandini', 'Teej', 'Matt'];

// * Old school way:
let filteredEducators0 = [];

for (let educator of educators) {
  if (educator[0].toLowerCase() === 'a') {
    filteredEducators.push(educator);
  }
}

// * Better way:
function startsWithAOrIsLong(name) {
  if (name[0].toLowerCase() === 'a') return true;
  if (name.length > 5) return true;
  return false;
}

// above can also be written in rockets, but may not be suitable for a more complicated function as it's harder to read, unless the rockets use function as its argument

let filteredEducators = educators.filter(startsWithAOrIsLong);

console.log(filteredEducators);

// ! REDUCE -> callback function that takes two arguments
let costs = [70, 100, 250, 500];

// * oldschool way:
let totalCost0 = 0;
for (let cost of costs) {
  totalCost0 += cost;
}

console.log(totalCost0);

// * Better way:
let totalCost = costs.reduce((initial, next) => initial + next, 0);

console.log(totalCost);

function addTax(initial, next) {
  return initial + next * 1.10
}

let totalCostWithTax = costs.reduce(addTax, 0);
console.log(totalCost);
