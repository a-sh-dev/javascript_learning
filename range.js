// ? Range - Javascript does not have a good built in way to create a range of numbers. In Ruby, we could do something like: numbers = (2..10).to_a
// ? Implement a range function that returns an array of numbers from the start number to the end number (inclusive). Example: range(2,10)  // should return [2,3,4,5,6,7,8,9,10]

const range = (start, end) => {
  const length = end - start + 1;
  let arr = [...Array(length).keys()].map((x) => start + x);
  return arr;
};

const rangeZaid = (start, end) => {
  let arr = [];
  arr.push(start);

  for (let i = 0; arr[i] < end; i++) {
    start++;
    arr.push(start);
  }
  return arr;
};

const rangeGrant = (start, end) => {
  let arr = [];
  let i = end - start + 1;

  while (i--) {
    arr[i] = end--;
  }
  return arr;
};

const rangeNam = (start, end, length = end - start + 1) => {
  return Array.from({ length }, (_, index) => start + index);
};

console.log(range(1, 1));
console.log(range(2, 10));
console.log(range(1, 3));
