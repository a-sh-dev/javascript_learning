// ! Basic syntax of the while loop
while (condition) {
  // body of loop
}

// * Display numbers from 1 to 5
// program to display numbers from 1 to 5
// initialise the variable
let i = 1, n = 5;

// while loop from i = 1 to 5
while (i <= n) {
  console.log(i);
  i += 1;
}

//* Sum of positive numbers only
// program to find the sum of positive numbers
// if the user enters a negative numbers, the loop ends
// the negative number entered is not added to sum
let sum = 0;

// take input from the user
let number = parseInt(prompt("Enter a number: "));

while (number >= 0) {
  // add all positive numbers
  sum += number;

  // take input again if the number is positive
  number = parseInt(prompt("Enter another number: "));
}

// display the sum
console.log(`The sum is ${sum}.`);

// ! DO...WHILE LOOP
// *Basic syntax
// The only difference between do...while and while loop
// is that do...while loop -> the body of loop is executed at least once
do {
  // body of loop
} while (condition);

// * Display numbers from 1 to 5
// program to display numbers
let i = 1;
const n = 5;

// do...while loop from 1 to 5
do {
  console.log(i);
  i++;
} while (i <= n);

// * Sum of Positive Numbers
// program to find the sum of positive numbers
// if the user enters a negative numbers, the loop ends
// the negative number entered is not added to sum
let sum = 0;
let num = 0;

do {
  sum += num;
  num = parseInt(prompt("Enter a number: "));
} while (num >= 0);

console.log(`The sum is ${sum}.`);

// ! FOR vs WHILE LOOP
/* 
A FOR loop is usually used when the number of iterarions is know. (Example below)
WHILE and DO...WHILE loops are usually used when the number of iterations are unknown
*/
// * FOR - this loop is iterated 5 times
for (let i = 1; i <= 5; ++i) {
  // body of loop
}

// * WHILE & DO...WHILE loops
while (condition) {
  // body of loop
} 