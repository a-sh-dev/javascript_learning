const miniMaxSum = (arr) => {
  const sortedArr = arr.sort((a, b) => a - b);
  const sum = sortedArr.reduce((total, num) => {
    return total + num;
  });
  console.log(`${sum - arr.at(-1)} ${sum - arr[0]}`);
};
miniMaxSum([7, 69, 2, 221, 8974]);
miniMaxSum([1, 2, 3, 4, 5]);
