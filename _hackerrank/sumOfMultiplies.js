/**
 * Count the sum of a range of multiplies of i between m and n
 * @param {number}, m, n, i
 * @return {number}, sum of range of m & n - multiplies of i
 */

const sumOfMultiplies = (m, n, i) => {
  let range = [];
  for (let x = m; x <= n; x++) {
    if (x % i === 0) range.push(x);
  }
  console.log(range);
  return range.reduce((sum, x) => sum + x, 0);
};

sumOfMultiplies(0, 10, 2);
