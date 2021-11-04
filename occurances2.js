// ! Create a new array of items
const createArr = (length) => [...Array(length)];

// Randomise number
const randomise = (n) => Math.ceil(Math.random() * n);

// Create random array of fruits
let apples = createArr(randomise(15)).map((fruit) => "apple");
let nashis = createArr(randomise(11)).map((fruit) => "nashi pear");
let oranges = createArr(randomise(15)).map((fruit) => "orange");
let grapes = createArr(randomise(20)).map((fruit) => "grape");
let bananas = createArr(randomise(15)).map((fruit) => "banana");

// Combine all fruits into one array
let fruits = [...apples, ...nashis, ...oranges, ...grapes, ...bananas];

// ? Below doesn't work, it returns undefined
// Calculate occurances of each fruit in the basket
let countFruit = new Map();
// console.log(countFruit)

const countedBasket = fruits.forEach((fruit) => {
  const currentCount = countFruit.has(fruit) ? countFruit.get(fruit) : 0;
  // console.log(currentCount)
  countFruit.set(fruit, currentCount + 1);
});
console.log(countedBasket);

// Traditional way
let basket = {};
for (let fruit of fruits) {
  basket[fruit] = (basket[fruit] || 0) + 1;
}
// console.log(basket);

// Calculate total fruits
const sumTotal = (object) => {
  Object.values(object).reduce((acc, cur) => acc + cur);
};

// Display information [fruit, count] => [key, value]
for (let [fruit, count] of Object.entries(basket)) {
  console.log(
    `There are ${count} ${fruit}${count > 1 ? "s" : ""} in the basket`
  );
}

// Display total fruits
console.log(`--- TOTAL: ${sumTotal(basket)} fruits ---`);
