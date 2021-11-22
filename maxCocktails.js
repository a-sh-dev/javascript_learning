// sort sources first - object based on the keys
// Don't need to sort the objects first!
const sortSource = (source) => {
  return Object.keys(source)
    .sort()
    .reduce((sorted, key) => {
      sorted[key] = source[key];
      return sorted;
    }, {});
};

// Oneliner sort
// const sortSourceShort = source => Object.keys(source).sort().reduce((sorted, key) => (sorted[key] = source[key], sorted), {})

// Quick way to compare equality b/w objects:
// JSON.stringify(Object.keys(sortedRecipe)) === JSON.stringify(Object.keys(sortedStock));

const maximumCocktails = (recipe, available) => {
  let cocktails = [];

  // Make each recipe
  let making = Object.entries(recipe).map(([recipeItem, amount]) => {
    return Math.floor(available[recipeItem] / amount);
  });
  // console.log("making: ", making);
  cocktails.push(Math.min(...making));

  // check if there is any insufficient stock (NaN)
  if (cocktails.some((value) => isNaN(value))) {
    // if there is NaN
    return 0;
  } else {
    // return the min of the orders (if there are more than 1 recipes to make)
    return Math.min(...cocktails);
  }
};

let martiniRecipe = { gin: 50, vermouth: 10, olives: 3 };
let barStock = { gin: 160, vermouth: 300, olives: 36 };
console.log("Can make: ", maximumCocktails(martiniRecipe, barStock)); //=> 3
// maximumCocktails should return three as that's the most cocktails we can make before running out of gin

let negroniRecipe = { gin: 25, vermouth: 25, campari: 25 };
let barStock2 = { gin: 2250, vermouth: 2250, olives: 60 };
console.log("Can make: ", maximumCocktails(negroniRecipe, barStock2)); //=> 0
// maximumCocktails should return zero as there's no campari to make a negroni with

let oldFashionedRecipe = { whisky: 60, sugarCube: 1, bitters: 5 };
let barStock3 = { sugarCube: 2, bitters: 20, whisky: 1000 };
console.log("Can make: ", maximumCocktails(oldFashionedRecipe, barStock3)); // = 2
//maximumCocktails should return 2 as that's the most old fashioneds we can make before running out of sugar cubes

// let martiniRecipe1 = {gin: 50, vermouth: 10, olives: 3}
// let negroniRecipe1 = {gin:25, vermouth: 25, campari: 25}
// let barStock4 = {gin: 2250, vermouth: 2250, olives: 60, campari: 1400 }
// console.log("Make: ", );
