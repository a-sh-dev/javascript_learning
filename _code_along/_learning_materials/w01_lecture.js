console.log('Hello, World!');

function adder(a, b, ...rest) {
  console.log(rest);
  return a + b;
}

console.log(adder(1, 5, 10, 10));

let myName = "Snoopy";

// const substract = (num1, num2) => {
//   let arguments = "hello"
//   console.log(arguments) // the weird thing happened when we run this code, when arguments aren't declared, it will search globally...
//   return num1 - num2;
// }

function substractLong (num1, num2) {
  return num1 - num2;
}

// the below function is the same as the long function above
const substract = (num1, num2) => (num1 - num2);

let answer = substract(10, 5, 6);

console.log(answer);

// it is considered bad practice too many 'students' aka CODESMELL
let students = ["Natacha", "Jasmine", "K-Dawg"];

function greetAllStudents() {
  for (let student of students) {
    console.log(`Hello ${student}`);
  }
}

greetAllStudents();

// Bellow is a better practice
const greetAll = (people) => {
  for (let person of people) {
    console.log("Hello" + person);
  }
}

greetAll(students);
greetAll(["Alice", "Bobby"]);

// below is a powerful
function double(num) {
  return num * 2;
}

let answer = [1,2,3,4].map(double);

// this is the same as the above without the function seperated:
let answer = [1,2,3,4].map(num => num * 2);

console.log(answer);