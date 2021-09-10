// ! Q7
// ? 7A IF -------------------------------------------------
const raining = true;
if (raining) {
  console.log('It is raining, bring an umbrella!');
};

// ? 7B IF ELSE-IF ELSE -------------------------------------------------
const number = -3;

// evaluate if number is greater than 0
if (number > 0) {
  console.log(`${number} is a positive number`) 
} else if (number == 0) {  // check if the number is 0
  console.log('ZERO!')
} else {
  // if number is neither larger than 0 nor zero
  console.log(`${number} is a negative number`)
};
// the following code block runs after the if evaluation is complete or satisfied
console.log('That is an example of an if-else if-else statement'); 
  
// ? 7C SWITCH -------------------------------------------------
const basket = 'lemon';

// switch (variable or expression)
switch (basket) { 
case 'banana':
  console.log('Go bananas!');
  break;
case 'cucumber':
  console.log('Cool as a cucumber.');
  break;
case 'cherry':
  console.log('Life is a bowl of cherries');
  break;
case 'peach':
  console.log('Peaches and cream');
  break;
case 'lemon':
  console.log('When life gives you lemons, make lemonade');
  break;
default:
  console.log('nothing!');
};
// the following code block runs after the if evaluation is complete or satisfied
console.log(`Idiom of the day is… '${basket}'`); 


// ? 7D WHILE -------------------------------------------------
// set the number of times for the loop to run
let i = 1, n = 100;

// while loop from i to n
while (i <= n) { // while i is less than 100 is true,
  console.log(i + '. Hello, World!');
  i += 1; // increase i by 1 while true
};

// ? 7E DO-WHILE -------------------------------------------------
// assign numbers to display
let num = 1;
const x = 10;

// do...while loop from 1 to 10
do {
  console.log(num); // the block inside do is the expression
  num += 1; // increase num by 1 while true
} while (num <= x); // run the loop until it reaches to 10

// ? 7F FOR-LOOP -------------------------------------------------
// display the sum of natural numbers
let sum = 0;
const max = 100;

// loop through i = 1, and increase i by 1
for (let i = 1; i <= max; i++) {
  sum += i; // add i to sum until i is greater than max
};

console.log(`The sum is ${sum}`);

// ? 7B -------------------------------------------------

