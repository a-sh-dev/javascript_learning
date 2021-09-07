// ! Comparator Function -> based on https://youtu.be/kxUNQtheCxM

/*
MDN: The default sort is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code unit values. -> hence the weirdness of unusual sorting!
*/

const letters = ['b', 'p', 'c', 'a', 'P'];

// If tested using character code values, we can see why the weirdness of sorting...
letters.forEach((letter) => {
  console.log(letter, ' ', letter.charCodeAt(0));
});

/* logs:
b 98
p 112
c 99
a 97
P 80
*/

const numbers = [2, 5, 100, 4];

// Check the UTF-16 or char code on numbers
numbers.forEach((number) => {
  console.log(number, String(number).charCodeAt(0));
});

/* logs:
2   50
5   53
100 49
4   52
*/

// ! Solution:
const sortedNumbers = numbers.sort((a, b) => a - b)
console.log(sortedNumbers);

// Sorting by Object Properties
const spiceGirls = [
  { name: 'ginger', age: 37 },
  { name: 'sporty', age: 30 },
  { name: 'baby', age: 29 },
  { name: 'posh', age: 40 },
];

// sort by age
// const comparator = (a, b) => {
//   return a.age - b.age
// }

// sort by length of name
const comparator = (a, b) => {
  return a.name.length - b.name.length
}

console.log(spiceGirls.sort(comparator));