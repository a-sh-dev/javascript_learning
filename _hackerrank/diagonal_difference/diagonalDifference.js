const diagonalDifference = (arr) => {
  const leftDiagonal = arr.reduce((sum, row, i) => {
    return sum + row.at(i);
  }, 0);

  // -1, -2, -3
  const rightDiagonal = arr.reduce((sum, row, i) => {
    return sum + row.at(-1 - i);
  }, 0);

  return Math.abs(leftDiagonal - rightDiagonal);
};

const arr1 = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
];

console.log(diagonalDifference(arr1)); // 15
