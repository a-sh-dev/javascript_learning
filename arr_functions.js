// ! Based on James Q Quick youtube -> https://www.youtube.com/playlist?list=PLDlWc9AfQBfZGZXFb_1tcRKwtCavR7AfT

const characters = [
  {
    name: 'Luke Skywalker',
    height: '172',
    mass: '77',
    eye_color: 'blue',
    gender: 'male',
  },
  {
    name: 'Darth Vader',
    height: '202',
    mass: '136',
    eye_color: 'yellow',
    gender: 'male',
  },
  {
    name: 'Leia Organa',
    height: '150',
    mass: '49',
    eye_color: 'brown',
    gender: 'female',
  },
  {
    name: 'Anakin Skywalker',
    height: '188',
    mass: '84',
    eye_color: 'blue',
    gender: 'male',
  },
];


//***MAP***
//1. Get array of all names
const names = characters.map(character => character.name);
console.log(names);

//2. Get array of all heights
const heights = characters.map(character => character.height);
console.log(heights);

//3. Get array of objects with just name and height properties
const nameHeight = characters.map((character) => ({
  name: character.name,
  height: character.height,
}));
console.log(nameHeight);

//4. Get array of all first names
const firstNames = characters.map(character => character.name.split(' ')[0]);
console.log(firstNames);

//***REDUCE*** (accumulator pattern)
//1. Get total mass of all characters
const totalMass = characters.reduce((acc, cur) => acc + cur.mass, 0);

//2. Get total height of all characters
const totalHeight = characters.reduce((acc, cur) => acc + cur.height, 0);

//3. Get total number of characters by eye color
const characterByEyeColor = characters.reduce((acc, cur) => {
  const color = cur.eye_color;
  if (acc[color]) {
    acc[color]++;
  } else {
    acc[color] = 1;
  }
  return acc;
}, {})
console.log(characterByEyeColor);

//4. Get total number of characters in all the character names
const totalNameCharacters = characters.reduce((acc, cur) => acc + cur.name.length, 0);
console.log(totalNameCharacters);

//***FILTER***
//1. Get characters with mass greater than 100
const greater100Character = characters.filter(
  (character) => character.mass > 100
);

//2. Get characters with height less than 200
const heightLessThan200 = characters.filter(
  (character) => character.height < 200
);

//3. Get all male characters
const maleCharacters = characters.filter(
  (character) => character.gender === 'male'
);

//4. Get all female characters
const femaleCharacters = characters.filter(
  (character) => character.gender === 'female'
);

//***SORT***
//1. Sort by mass
const byMass = characters.sort((a, b) => a.mass - b.mass);

//2. Sort by height
const byHeight = characters.sort((a, b) => a.height - b.height);

//3. Sort by name (string is slightly different)
const byName = characters.sort((a, b) => {
  if (a.name < b.name) return -1;
  return 1;
});

//4. Sort by gender
const byGender = characters.sort((a, b) => {
  if (a.gender === 'female') return -1;
  return 1;
});

//***EVERY***
//1. Does every character have blue eyes?
const allBlueEyes = characters.every(
  (character) => character.eye_color === 'blue'
);

//2. Does every character have mass more than 40?
const allMassMoreThan40 = characters.every(
  character => character.mass > 40
);

//3. Is every character shorter than 200?
const allShorterThan200 = characters.every(
  character => character.height < 200
);

//4. Is every character male?
const allMale = characters.every(
  (character) => character.gender === 'male'
);

//***SOME***
//1. Is there at least one male character?
const oneMaleChar = characters.some(
  (char) => char.gender === 'male'
);
console.log(oneMaleChar);

//2. Is there at least one character with blue eyes?
const oneBlueEyes = characters.some(
  (character) => character.eye_color === 'blue'
);
console.log(oneBlueEyes);

//3. Is there at least one character taller than 210?
const oneTallerThan210 = characters.some(
  (character) => character.height > 210
);
console.log(oneTallerThan210);

//4. Is there at least one character that has mass less than 50?
const oneMassLessThan50 = characters.some(
  character => character.mass < 50
);
console.log(oneMassLessThan50);