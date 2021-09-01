// ! CodeCademy

// * All iterator methods takes a callback function that can be pre-defined, or a function expression, or an arrow function. 

// ! forEach -> used to execute the same code on every element in an array but does not change the array and returns undefined. 
const artists = ['Picasso', 'Kahlo', 'Matisse', 'Utamaro'];

artists.forEach(artist => {
  console.log(`${artist} is one of my favorite artists.`);
});

// Examples
const fruits = ['mango', 'durian', 'apple', 'grapes'];
// standard
fruits.forEach(fruit => console.log(`I want to eat a ${fruit}.`));
// add grammar
fruits.forEach(fruit => {
  fruit.match(/^[aiueo]/) ? console.log(`I want to eat an ${fruit}`) : console.log(`I want to eat a ${fruit}`); 
});

// ! Map -> executes the same code on every element in an array and returns a new array with the updated elements. 
const numbers = [1, 2, 3, 4, 5];

const squareNumbers = numbers.map(number => {
  return number * number;
});
console.log(squareNumbers);

// Example
const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// Create the secretMessage array below -> that contains the first character of each string in the animals array.
const secretMessage = animals.map(animal => animal[0]);
console.log(secretMessage.join(''));

// Example
const bigNumbers = [100, 200, 300, 400, 500];

// Create the smallNumbers array below -> to divide all the numbers in bigNumbers by 100
const smallNumbers = bigNumbers.map(number => number / 100);
console.log(smallNumbers);

// ! Filter -> checks every element in an array to see if it meets certain criteria and returns a new array with the elements that return truthy for the criteria. 
const things = ['desk', 'chair', 5, 'backpack', 3.14, 100];

const onlyNumbers = things.filter(thing => {
  return typeof thing === 'number';
});
console.log(onlyNumbers);

// Example
const randomNumbers = [375, 200, 3.14, 7, 13, 852];
// Call .filter() on randomNumbers below -> to return values that are less than 250. Save them to a new array called smallNumbers
const smallNumbers = randomNumbers.filter(number => number < 250);
console.log(smallNumbers);

// Example
const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];
// Call .filter() on favoriteWords below -> Invoke .filter() on the favoriteWords array to return elements that have more than 7 characters.
const longFavoriteWords = favoriteWords.filter(word => {
  return word.length > 7
});
console.log(longFavoriteWords);

// ! findIndex() method -> returns the FIRST element's INDEX that evaluates to true. It returns -1 if none of the elements in the array satisfies the condition. 

const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

// Find the index of the element that has the value 'elephant' and save the returned value to a const variable named foundAnimal
const foundAnimal = animals.findIndex(animal => {
  return animal === 'elephant';
})
console.log(foundAnimal);

// Find the index of the first animal that starts with the letter 's' from the animals array
const startsWithS = animals.findIndex(animal => {
  return animal[0] === 's';
})
console.log(`The animal that starts with S is ${animals[startsWithS]}`);

// ! The .reduce() Method -> returns a single value after iterating through the elements of an array, thereby reducing the array. Take a look at the example below:

const newNumbers = [1, 3, 5, 7];
const newSum = newNumbers.reduce((sum, arrNum) => {
  console.log(`The value of sum: ${sum}`);
  console.log(`The value of arrNum: ${arrNum}`);
  return sum + arrNum;
}, 10) // <- OPTIONAL Second argument for .reduce() acts as an intial value to the sum

console.log(`The sum is: ${newSum}`);

// ! MIXES
// ! The .some() Method -> tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array. 

const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

console.log(words.some((word) => {
  return word.length < 6;
}));

// Use filter to create a new array
const interestingWords = words.filter(word => {
  return word.length > 5
})

// ! The .every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value. 
// Check if every element has more than 5 characters
console.log(interestingWords.every((word) => { 
  return word.length > 5
} ));

// ! MIXES2

const cities = ['Orlando', 'Dubai', 'Edinburgh', 'Chennai', 'Accra', 'Denver', 'Eskisehir', 'Medellin', 'Yokohama'];

const nums = [1, 50, 75, 200, 350, 525, 1000];

//  Choose a method that will return undefined
cities.forEach(city => console.log(`Have you visited ${city}?`));

// Choose a method that will return a new array
const longCities = cities.filter(city => city.length > 7);

// Choose a method that will return a single value
const word = cities.reduce((acc, currVal) => {
  return acc + currVal[0]
}, "C");

console.log(word)

// Choose a method that will return a new array
const smallerNums = nums.map(num => num - 5);

// Choose a method that will return a boolean value
nums.some(num => num < 0);
