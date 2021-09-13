const fs = require('fs');
const { createSanitisedArray, removeEmptyArrayItems } = require('./utils.js');

function getData(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (error, data) => {
      if (error) reject(error);
      resolve(data);
    })
  })

}

getData('./celeb-classroom.txt')
  .then(createSanitisedArray)
  .then(removeEmptyArrayItems)
  .then(selectRandomElement)
  .then(capitaliseName)
  .then(data => console.log(data))
  .catch(error => console.log(error))


console.log('Processing...');
