// ! SPREAD Operator -> https://youtu.be/iEEmz8MLaGk

const girlGroup1 = ['ginger', 'sporty', 'scary'];
const girlGroup2 = ['baby', 'posh'];
const newMember = 'happy';

// spread operator
const spiceGirls = [...girlGroup1, ...girlGroup2];

// traditional concat that produces the same as spread
const spiceGirlsC = girlGroup1.concat(girlGroup2)
console.log(spiceGirls);

// Without the spread 
const spiceGirlsWO = [girlGroup1, girlGroup2];
console.log(spiceGirlsWO);
// => [ [ 'ginger', 'sporty', 'scary' ], [ 'baby', 'posh' ] ]

// With the additional new member with spread, will be quite complex if using concat:
const spiceGirls2 = [...girlGroup1, newMember, ...girlGroup2]
console.log(spiceGirls2);

// MDN: Spread syntax allows an iterable such as an array expression or string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected.

// Use spread for copy
const girlGroup1Copy = [...girlGroup1];

// Working with Objects
const sG1 = { leadSinger: 'ginger', bgSinger1: 'baby' }
const sG2 = { bgSinger2: 'posh', bgSinger3: 'sporty' }
const allSpice = {...sG1, ...sG2}

console.log(allSpice);
/* logs:
{
  leadSinger: 'ginger',
  bgSinger1: 'baby',
  bgSinger2: 'posh',
  bgSinger3: 'sporty'
}
*/ 

// With Function Calls 
const group = ['bobo', 'oakkie', 'nyomi'];

function addPets(pet1, pet2, pet3) {
  return `${pet1}! ${pet2}! ${pet3}`
}
console.log(addPets(...group));
// => bobo! oakkie! nyomi!