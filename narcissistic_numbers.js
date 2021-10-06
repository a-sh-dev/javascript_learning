/* Narcissistic number
# A Narcissistic Number is a number which is the sum of its own digits, when each is raised to the power of the number of digits in the number. We will restrict ourselves to decimal (base 10).

# For example, take 153 (3 digits):
# 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
# and 1634 (4 digits):

# 1^4 + 6^4 + 3^4 + 4^4 = 1 + 1296 + 81 + 256 = 1634
# The Challenge:

# Your code must return true or false depending upon whether the given number is a Narcissistic number in base 10.
*/

function narcissisticNumber(number) {
  let power = number.toString().length;
  let digits = number.toString().split('').map(Number);
  let result = digits.reduce((acc, cur) => {
    return acc + (cur ** power)
  }, 0);
  return number === result
}

function narcissisticNumberZaid(number) {
  const originalNum = number;
  let array = [];
  let sum = 0;

  while (number) {
    array.unshift(number % 10);
    number = Math.floor(number / 10);
  }

  let exponent = array.length;

  for (let i = 0; i < array.length; i++) {
    let value = array[i] ** exponent;
    sum += value;
  }

  return originalNum === sum;
}

console.log(narcissisticNumber(1634))
console.log(narcissisticNumber(153))
console.log(narcissisticNumberZaid(153))
console.log(narcissisticNumberZaid(1634))