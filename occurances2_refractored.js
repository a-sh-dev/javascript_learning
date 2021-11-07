// ! Create a new array of items
// * The first method adds the x to be filled into the array
const createArr = (length, x) => Array(length).fill(x);

// * The methods below only create the length of array
const createArr1 = (length) => Array.from(new Array(length));
// Another method:
const createArr2 = (length) => [...Array(length)];

// Randomise number
const randomise = (n) => Math.ceil(Math.random() * n);

// Combine two functions together
const createPack = (arr, n) => {
  let pack = [];
  for (let eachItem of arr) {
    // pack.push(createArr(randomise(n)).map((item) => eachItem));
    pack.push(createArr(randomise(n), eachItem));
  }
  return pack.flat();
};

let randomFruitArr = ["apple", "mango", "durian", "pear", "orange", "banana"];
// let randomFruitArr = ["🍎", "🍏", "🥭", "🍑", "🍌", "🍉", "🍋"];

let fruits = createPack(randomFruitArr, 20);
// console.log(fruits)

/*
====================
CALCULATE OCCURANCES
====================
 */

// Traditional way
let basket = {};
for (let fruit of fruits) {
  basket[fruit] = (basket[fruit] || 0) + 1;
}
// console.log(basket);

// Calculate total fruits
const sumTotal = (object) => {
  return Object.values(object).reduce((acc, cur) => acc + cur);
};

/*
=================
DISPLAY
=================
 */

// Display information [fruit, count] => [key, value]
for (let [fruit, count] of Object.entries(basket)) {
  console.log(
    `There are ${count} ${fruit}${count > 1 ? "s" : ""} in the basket`
  );
}

// Display total fruits
console.log(`--- TOTAL: ${sumTotal(basket)} fruits ---`);
