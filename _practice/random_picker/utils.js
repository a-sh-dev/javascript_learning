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

const selectRandomElement = arr => {
  const randomIndex = Math.floor(Math.random() * arr.length)
  return arr[randomIndex];
};

function capitaliseName(str) {
  const 
}