// ! A simple example of a recursive function to count down the value to 1

// program to count down numbers to 1
const countDown = number => {
  // display the number
  console.log(number);

  // decrease the number value
  const newNumber = number - 1;

  // base case
  if (newNumber > 0) {
    countDown(newNumber);
  }
}

countDown(3);

// ! Find Factorial example
// program to find the factorial of a number
const factorial = x => {
  // if number is 0
  if (x === 0) {
    return 1;
  }

  // if number is positive
  else {
    return x * factorial(x - 1);
  }
}

const num = 5;

// calling factorial() if num is non-negative
if (num > 0) {
  let result = factorial(num);
  console.log(`The factorial of ${num} is ${result}`);
}

/* 
  *  From Fireship.io: A recursive function is one that calls itself from inside its own function body. If a terminating condition is not provided it will create and infinite loop. Recursive functions are commonly used in algorithm implementations to efficiently handle tasks like binary-tree traversal. Below is an example of a recursive function that traverses the the file system using NodeJS.
*/ 

const fs = require('fs');
const { join } = require('path');

const traverse = (dir) => {

  const subfolders = fs.statSync(dir).isDirectory()
                     && fs.readdirSync(dir);
                     
  if (subfolders) {

    console.log('👟👟👟 Traversing ', dir);

    subfolders.forEach(path => {
      const fullPath = join(dir, path);

      traverse( fullPath );
    });

  }

}

traverse( process.cwd() );