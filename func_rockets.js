// ! From CodeCademy
// Concise Body Arrow Functions:
// *1. Functions that take only a single parameter do not need that parameter to be enclosed in paranthesis, except it takes zero or multiple parameters:

// Zero parameters:
const functionName = () => {};

// One parameter:
const functionName = paramOne => {};

// Two or more parameters:
const functionName = (paramOne, paramTwo) => {};

// *2. A function body composed of a single-line block does not need curly braces. Without the curly braces, whatever that line evaluates will be automatically returned. The contents of the block should immediately follow the arrow => and the return keyword can be removed -- Implicit return

// Single-line block:
const sumNumbers = number => number + number;

// Multi-line block:
const sumNumbers = number => {
  const sum = number + number;
  return sum; 
}

// Long
const plantNeedsWater = (day) => {
  if (day === 'Wednesday') {
    return true;
  } else {
    return false;
  }
};

// Refractored - shorter with ternary operator
const plantNeedsWater = (day) => {
  return day === 'Wednesday' ? true : false;
};

// Concise with implicit return for a single-line block
const plantNeedsWater = day => day === 'Wednesday' ? true : false;