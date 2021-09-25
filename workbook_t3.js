// ! Q7
// ? 7A IF -------------------------------------------------
const raining = true;
if (raining) {
  console.log('It is raining, bring an umbrella!');
};

// ? 7B IF ELSE-IF ELSE -------------------------------------------------
const number = -3;

// evaluate if number is greater than 0
if (number > 0) {
  console.log(`${number} is a positive number`) 
} else if (number == 0) {  // check if the number is 0
  console.log('ZERO!')
} else {
  // if number is neither larger than 0 nor zero
  console.log(`${number} is a negative number`)
};
// the following code block runs after the if evaluation is complete or satisfied
console.log('That is an example of an if-else if-else statement'); 
  
// ? 7C SWITCH -------------------------------------------------
const basket = 'lemon';

// switch (variable or expression)
switch (basket) { 
case 'banana':
  console.log('Go bananas!');
  break;
case 'cucumber':
  console.log('Cool as a cucumber.');
  break;
case 'cherry':
  console.log('Life is a bowl of cherries');
  break;
case 'peach':
  console.log('Peaches and cream');
  break;
case 'lemon':
  console.log('When life gives you lemons, make lemonade');
  break;
default:
  console.log('nothing!');
};
// the following code block runs after the if evaluation is complete or satisfied
console.log(`Idiom of the day is… '${basket}'`); 


// ? 7D WHILE -------------------------------------------------
// set the number of times for the loop to run
let i = 1, n = 100;

// while loop from i to n
while (i <= n) { // while i is less than 100 is true,
  console.log(i + '. Hello, World!');
  i += 1; // increase i by 1 while true
};

// ? 7E DO-WHILE -------------------------------------------------
// assign numbers to display
let num = 1;
const x = 10;

// do...while loop from 1 to 10
do {
  console.log(num); // the block inside do is the expression
  num += 1; // increase num by 1 while true
} while (num <= x); // run the loop until it reaches to 10

// ? 7F FOR-LOOP -------------------------------------------------
// display the sum of natural numbers
let sum = 0;
const max = 100;

// loop through i = 1, and increase i by 1
for (let i = 1; i <= max; i++) {
  sum += i; // add i to sum until i is greater than max
};

console.log(`The sum is ${sum}`);

// ? 13 -------------------------------------------------

// constructing a (parent) class of Car
class Car {
  // the constructor method is called when a new Car object is instantiated
  // every new initialised Car first argument will be the 'brand' for its property
  constructor(brand) {
    // 'this' refers to the regular object (Car) for binding the property
    this.carname = brand;
  }
  // a static method of Car that can be called by the car object 'Car.present()'
  present() {
    return 'I have a ' + this.carname;
    // this method returns 'I have a brand' - the argument passed in the object instance
  }
}

// constructing a child class that inherits all Car's object properties and methods
class Model extends Car {
  constructor(brand, mod) { // Model has an extra property of 'mod'
    super(brand); // the super calls the parent's class constructor, without the need to double writing this.carname = brand -> since its inheritance is called through super() method
    this.model = mod; // construct the property of 'mod' that is passed in the second argument of the object 
  }

  // a static method of Model object that can be called by the model object 'Model.show()'
  show() {
    return this.present() + ', it was made in ' + this.model;
    // present() method is inherited from the Car parent class and then extended in the show() method
  }
}

// create an array of 'makes'
let makes = ["Ford", "Holden", "Toyota"]

// models create an array filled with 40 new years from 1980 to 2019 by using the Array.from() method with two arguments: shallow-copies a new array, iterates 40 times by adding the index value (i) to 1980
let models = Array.from(new Array(40), (x,i) => i + 1980)

// a function to pick a random element, to be used on the 'makes' array and 'models' array
function randomIntFromInterval(min,max) { // min and max included
    return Math.floor(Math.random()*(max-min+1)+min);
}

// iterate over each element in the models array (40 times)
for (let model of models) {
  // pick a random element through the index value from makes array  
  let make = makes[randomIntFromInterval(0,makes.length-1)] // min is 0, max is 3 which is the length of makes array - 1

  // the same as above, but perhaps it should be models.length-1 as the max value? the below generates only 3 random years model of index 0,1,3 from the models array (1980, 1981, 1982)
  model = models[randomIntFromInterval(0,makes.length-1)]

  // then create a new object instance of 'mycar' from the Model class, use the randomly picked make/brand from makes and randomly picked model from models
  let mycar = new Model(make, model);
  
  // log to console each of the model and call the show method from Model class to display 'I have a ' + make, it was made in ' + model'
  console.log(mycar.show())
}

