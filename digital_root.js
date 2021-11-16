// ! Recursive Solution
function digitalRoot(n) {
  let sum = n
    .toString()
    .split("")
    .map(Number)
    .reduce((total, cur) => {
      return total + cur;
    }, 0);
  return sum < 10 ? sum : digitalRoot(sum);
}

console.log(digitalRoot(6));
// => 6
console.log(digitalRoot(16));
// => 7
console.log(digitalRoot(942));
// => 6
console.log(digitalRoot(132189));
// => 6
console.log(digitalRoot(493193));
// => 2

// ! Mike's solution
function digitalRootMike(n) {
  // split numbers into array
  const toArray = (number) => {
    return number.toString().split("").map(Number);
  };
  // convert n to array
  let nArray = toArray(n);

  while (nArray.length > 1) {
    // sum all the elements in the array
    let reduced = nArray.reduce((prev, cur) => prev + cur);
    // set the array variable to the reduced number, and convert to array
    nArray = reduced.toString().split("").map(Number);
  }
  return Number(nArray.join());
}

console.log("--- Mike's Solution ---");
console.log(digitalRootMike(6));
console.log(digitalRootMike(16));
console.log(digitalRootMike(942));
console.log(digitalRootMike(132189));
console.log(digitalRootMike(493193));
