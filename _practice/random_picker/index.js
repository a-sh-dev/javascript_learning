const fs = require('fs');
const { createSanitisedArray, removeEmptyArrayItems, selectRandomElement, capitalisedName } = require('./utils.js');

function getData(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (error, data) => {
      if (error) reject(error);
      resolve(data);
    });
  });
};

getData('./celeb-classroom.txt')
  .then(createSanitisedArray)
  .then(removeEmptyArrayItems)
  .then(selectRandomElement)
  .then(capitalisedName)
  .then(data => console.log(data))
  .catch(error => console.log(error))


// * Without using Promise that may get things complicated in callbacks:
// fs.readFile('./celeb-classroom.txt', 'utf-8', (err, data) => {
//   if (err) {
//     console.log(err.message);
//     return;
//   }
//   const celebs = data.split('\n').map(name => name.trim()).filter(name => name.length > 0);
//   const randomIndex = Math.floor(Math.random() * celebs.length);
//   const randomCeleb = celeb[randomIndex];
//   const capitalisedName = randomCeleb.split(' ').map(word => word[0].toUpperCase() + word.substring(1)).join(' ');
//   console.log(capitalisedName);
// });

console.log('Processing...');
