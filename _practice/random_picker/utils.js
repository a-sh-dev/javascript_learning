const createSanitisedArray = str => {
  return str.split('\n').map(word => word.trim());
};

const removeEmptyArrayItems = arr => {
 const filteredArray = arr.filter(item => !!item)
 if (filteredArray.length === 0) {
   throw new Error ('No data left')
 }
  return filteredArray
};

function selectRandomElement(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length)
  return arr[randomIndex];
};

// const selectRandomElement = arr => {
//   const randomIndex = Math.floor(Math.random() * arr.length)
//   return arr[randomIndex];
// };

function capitalisedName(str) {
  const capitalisedString = str.split(' ').map(word => word[0].toUpperCase() + word.substring(1)).join(' ');
  return capitalisedString;
};

module.exports = {
  createSanitisedArray,
  removeEmptyArrayItems,
  selectRandomElement,
  capitalisedName
};