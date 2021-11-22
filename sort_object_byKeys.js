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

let martiniRecipe = { gin: 50, vermouth: 10, olives: 3 };
let barStock = { gin: 160, vermouth: 300, olives: 36 };

let sortedRecipe = sortSource(martiniRecipe);
let sortedStock = sortSource(barStock);
