// Memoization is a super useful performance optimisation technique that can be used to improve the performance of slow running functions -> https://youtu.be/dO9LQsIpavM


const memoize = (fn) => {
  const cache = {};
  return function(...args) {
    if (cache[args]) {
      return cache[args]
    }
    const result = fn(...args)
    cache[args] = result;
    return result;
  };
};

const ridiculousSlowFunc = num => {
  for (let i = 0; i <= num; i++) {
    if (i === num) {
      return i;
    }
  }
};

const fastFunc = memoize(ridiculousSlowFunc);

// checking the runtime
console.time();
console.log(fastFunc(20000));
console.timeEnd();

// run it twice
console.time();
console.log(fastFunc(20000));
console.timeEnd();

// basically it will use the cache if the values have been computed before, if we didn't use memoize, both runtime will be the same or slightly smaller for the second run, but with memoize, it will significantly reduce the second run time
// For the above runtime for example: first one was 167.402ms and the second one is 0.123ms!!

