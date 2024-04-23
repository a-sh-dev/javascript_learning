let fruits = [
  'apple',
  'apple',
  'grapes',
  'orange',
  'orange',
  'durian',
  'grapes',
  'apple',
];
let basket = {};

// * Traditional solution
for (let fruit of fruits) {
  if (basket[fruit] === null) {
    basket[fruit] = 1;
  } else {
    basket[fruit] += 1;
  }
}

// ! Shorter solution
for (let fruit of fruits) {
  // * If basket[fruit] is null, set it to 0
  basket[fruit] = basket[fruit] ?? 0;
  // * Increase basket[fruit] by 1
  basket[fruit]++;
}

// ! Oneliner
for (let fruit of fruits) {
  basket[fruit] = (basket[fruit] || 0) + 1;
}

for (let fruit of fruits) {
  basket[fruit] = basket[fruit] ? basket[fruit] + 1 : 1;
}

for (let fruit of fruits) {
  // ~ turn null to be 0 or 1 and added with math stuff with the - (this is hard to read!)
  basket[fruit] = -~basket[fruit];
}

console.log(basket);

// ! Using reduce method
const basketWithReduce = fruits.reduce((basket, fruit) => {
  // Check if the fruit exists in the basket
  // if it exists, add 1, otherwise assign 0 as the value
  basket[fruit] = (basket[fruit] || 0) + 1;
  return basket;
}, {});

// ! Using Map (when order of insertion is maintained)
// Otherwise, using plain object saves more memory
const basketWithMap = fruits.reduce((basket, fruit) => {
  basket.set(fruit, (basket.get(fruit) || 0) + 1);
  return basket;
}, new Map());
