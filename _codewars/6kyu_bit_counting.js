/**
 * Write a function that takes an integer as input,
 * and returns the number of bits that are equal to one in the
 * binary representation of that number.
 * You can guarantee that input is non-negative.
 * E.g. The binary representation of 1234 is 10011010010,
 * so the function should return 5 in this case
 */

const countBits = (n) => {
  return n.toString(2).split("0").join("").length;
};

countBits(1234);

const countBits2 = (n) => {
  return n
    .toString(2)
    .split("")
    .filter((el) => el === "1").length;
};

countBits2(1234);

// without toString(2) automatic conversion
const countBitsMath = (n) => {
  let count1 = 0;
  while (n > 0) {
    if (n % 2 === 1) count1++;
    n = Math.floor(n / 2);
  }
  return count1;
};

countBitsMath(1234);
