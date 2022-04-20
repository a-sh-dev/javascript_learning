// ? Creating a range function using generator functions
// Based on @SimonHoiberg

// ! Setup the utility function using a generator + Symbol.iterator
const range = (end, start = 0, step = 1) => {
  function* generateRange() {
    let x = start - step;
    while (x < end - step) yield (x += step);
  }

  return {
    [Symbol.iterator]: generateRange,
  };
};

const range1 = [...range(8)]; // [0, 1, 2, 3, 4, 5, 6, 7]
const range2 = [...range(6, 1)]; // [1, 2, 3, 4, 5]
const range3 = [...range(10, 2, 3)]; // [2, 5, 8]
