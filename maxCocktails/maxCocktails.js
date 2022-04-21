// Preventing NaN
const maximumCocktails = (recipe, available) => {
  let cocktails = [];

  // To prevent NaN, ensure all ingredients/items are inStock
  let inStock = Object.keys(recipe).every((item) =>
    Object.keys(available).includes(item)
  );
  // console.log("all inStock:", inStock);

  if (inStock) {
    let making = [];
    // when every items inStock, make the recipe
    Object.entries(recipe).map(([recipeItem, amount]) => {
      return making.push(Math.floor(available[recipeItem] / amount));
    });
    // console.log("making: ", making);
    // only take the minimum availability to make
    cocktails.push(Math.min(...making));
  } else {
    // can't make the recipe - 0
    cocktails.push(0);
  }
  // finally, show the availability to make
  return Math.min(...cocktails);
};

// Shorter solution but resulting partial NaN
const maximumCocktailsNan = (recipe, available) => {
  let cocktails = [];

  // Make each recipe regardless items availability
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
