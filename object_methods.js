let homerSimpson = {
  firstName: 'Homer',
  lastName: 'Simpson',
  location: 'Springfield',
  children: [
    'Bart',
    'Lisa',
    'Maggie'
  ],
  catchPhrase: 'Doh!',
  // older stype:
  speaksOld: function() {
    console.log(this.catchPhrase);
  },
  // shorthand -> modern syntax:
  speaks() { console.log(this.catchPhrase) }
  
  // inside an object (like this one) don't use arrow function:
  // speak: () => {
  // console.log(this.catchPhrase)
  // } // resulting: undefined
}

homerSimpson.speaks(); // Doh!

// ! ES6 Property Value Shorthand
// Normally and traditionally we may have to do this:
const monsterFactoryLong = (name, age) => {
  return {
    name: name,
    age: age
  }
};

// * We can use a destructuring technique called property value shorthand, to save some keystrokes! 
const monsterFactory = (name, age) => {
  return {
    name,
    age
  }
};

// ! Built-in Object Methods
const robot = {
  model: 'SAL-1004',
  mobile: true,
  sentient: false,
  armor: 'Steel-plated',
  energyLevel: 75
};

// * Obtain the object's keys:
const robotKeys = Object.keys(robot);
// => [ 'model', 'mobile', 'sentient', 'armor', 'energyLevel' ]

// * Obtain the entries of the object (in key and values pairs)
const robotEntries = Object.entries(robot);
/* => [ [ 'model', 'SAL-1000' ],
  [ 'mobile', true ],
  [ 'sentient', false ],
  [ 'armor', 'Steel-plated' ],
  [ 'energyLevel', 75 ] ]
*/ 

// * Iterates over objects with for-of
const obj = {
  moon: '🌙',
  trex: '🦖'
} 

// * Obtain keys
for (k of Object.keys(obj)) {
  console.log(k); //* -> moon, trex
};

// * Obtain values
for (v of Object.values(obj)) {
  console.log(v); //* -> 🌙, 🦖
}

// * Obtain both key and values with the for of iterator
for (const [k, v] of Object.entries(obj)) {
  console.log(k, v); //* -> moon 🌙, trex 🦖
};

// * Create a new object using the existing properties of robot, but with a few additional properties -> Object.assign(target, source)
let target = { laserBlaster: true, voiceRecognition: true }

const newRobot = Object.assign(target, robot);
/*
  { laserBlaster: true,
  voiceRecognition: true,
  model: 'SAL-1000',
  mobile: true,
  sentient: false,
  armor: 'Steel-plated',
  energyLevel: 75 }
 */

// * Spread syntax is also usable to copy object
const clone = Object.assign({}, original);

const sugar = { ...original };

const sugar = { ...original, hola: 'mundo' };

// ! Constructors – just like how Class is created -> describes how to create an Object other than literal such as const obj = {}
// * Use Sentence-case
function Boat(name) {
  this.name = name;
  this.created = Date.now()

  this.horn = function () {
    console.log(this.name);
  }
};

// * The object is then instantiated with 'new' keyword
const sunny = new Boat('Sunny');
const thousands = new Boat('Thousands Sunny');

sunny.horn() //* -> Sunny