// Rest Parameters -> https://youtu.be/qla3bATsadw

// Syntax is the same as the spread operator! However, the rest parameter syntax allows us to represent an indefinite number of arguments as an array

// Say we have an addNums function
function addNumsM(num1, num2, num3, num4) {
  return num1 + num2 + num3 + num4
}

console.log(addNumsM(1, 3, 5, 7));
// will logs 16 as the sum of all the numbers

/*
But with rest params, you don't have to manually add the params and update the code block in the function manually, instead we can:
*/ 

function addNums(...nums){
  // return nums
  return nums.reduce((accum, currVal) => {
    return accum + currVal
  }, 0);
}

// If we do the below, it will output as an array of the numbers if the above function code block is only 'return nums' 
// console.log(addNums(1, 3, 5, 7));

console.log(addNums(1, 3, 5, 7));
// with the reduce method above, it will output => 16

function numbers(x, y, ...nums) {
  console.log(x, y, nums);
}

numbers(1, 2, 3, 4, 5);
// => 1 2 [ 3, 4, 5 ]

function multiply(multiplier, ...nums) {
  return nums.map((num) => {
    return multiplier * num
  })
}

console.log(multiply(2, 1, 3, 5));
// => [ 2, 6, 10 ]
// 2 is the 'multiplier' being the first argument, therefore 2 * 1, 2 * 3, 2 * 5

// ! Positional params (limited params)
function makeBreakfast(main, side, drink) {
  console.log(arguments)
  return `Breakfast is ${main}, ${side}, and ${drink}`;
}

// ! Named with destructured
function makeLunch (opts) {
  const { main, side, drink } = opts;
  return `Lunch is ${main}, ${side}, ${drink}.`;
}

// ! Rest params
function makeDinner (main, ...args) {
  console.log(main, args)
  return `Dinner includes ${main} and ${args.join('')}.`;
}

makeBreakfast('🥪', '🥑', '🥛');
makeLunch({ main: '🥗', side: '🍟', drink: '🍵' });
makeDinner('🍜', '🍕', '🥩', '🍙', '🍏', '🍷');