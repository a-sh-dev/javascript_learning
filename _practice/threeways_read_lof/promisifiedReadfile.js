const fs = require('fs');

// ! This is a function for reading files that returns a promise. We converted the fs.readfile() function which uses callbacks. Many of the asynchronous functions already return promises, so this extra step is seldom necessary.
const promisifiedReadfile = (file, encoding) => {
  new Promise((resolve, reject) => {
    fs.readFile(file.encoding, (err, text) => {
      if (err) {
        return reject(err.message);
      }
      resolve(text);
    });
  });
}

module.exports = promisifiedReadfile