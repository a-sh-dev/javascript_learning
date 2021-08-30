let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

// remove the last string of the array
secretMessage.pop();

// add the words to and Program as separate strings to the end of the secretMessage array
secretMessage.push('to', 'Program');

// array[oldWordIndex] = 'newWord';
secretMessage[7] = 'right';

secretMessage.shift();

// array.unshift('newWord');
secretMessage.unshift('Programming');

// remove the strings get, right, the, first, time,, and replace them with the single string know,
// array.splice(indexToStart, numberOfIndices, 'stringToAdd');
secretMessage.splice(6,5, 'know,');

// On one line, use console.log() and .join() to print the secret message as a sentence.
console.log(secretMessage.join(' '));

// ! Copy or Clone or Duplicate array
let students = ['Alice', 'Jane', 'Tim'];
let studentsCopy = [...students];

let studentsClone = Array.from(students);