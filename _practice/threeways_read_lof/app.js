const fs = require('fs');
const promisifiedReadfile = require('./promisifiedReadfile');

// ! METHOD1: Using fs.readfile() and callback functions:
fs.readFile('./file.txt', 'utf-8', (err, data) => {
  if (err) throw err;
  let firstSentence = data;
  fs.readFile('./file2.txt', 'utf-8', (err, data) => {
    if (err) throw err;
    let secondSentence = data;
    console.log(firstSentence, secondSentence);
  });
});

// ! METHOD2: Using native promises with our 'promisified' version of readfile:
let firstSentence;
promisifiedReadfile('./file.txt', 'utf-8')
  .then((data) => {
    firstSentence = data;
    return promisifiedReadfile('./file2.txt', 'utf-8');
  })
  .then((data) => {
    let secondSentence = data;
    console.log(firstSentence, secondSentence);
  })
  .catch((err) => {
    console.log(err);
  });

  // ! METHOD3: Using promisifiedReadfile() again but instead of using the native promises .then() syntax, we declare and invoke an async/await function:
  async function readFile() {
    let firstSentence = await promisifiedReadfile('./file.txt', 'utf-8');
    let secondSentence = await promisifiedReadfile('./file2.txt', 'utf-8');
    console.log(firstSentence, secondSentence);
  };

readFiles();