/*
? Last Index - Complete the function findLastIndex which takes an array and an object  - the parameter is called needle, like in a haystack - returning the index closest to the end where the predicate truth test passes. Note that needle is an object. What if the object is not found in the array at all? In that case return -1, like built-in array methods that return -1 when an index isn't found.
*/

// Danny's solution
const findLastIndex = (array, needle) => {
	return array.map(obj => Object.values(obj).includes(Object.values(needle)[0])).lastIndexOf(true);
};

const findLastIndexAlex = (array, needle) => {
  let [[key, value]] = Object.entries(needle);
  for (let i = array.length - 1; i >= 0; i--) {
    console.log(key, value);
    if (array[i][key] === value) return i;
  } 
  return -1;
};

const findLastIndexLong = (array, needle) => {
  //* Object.keys() method returns an array of a given object's own enumerable property names, iterated in the same order that a normal loop would.
  let needleKey = Object.keys(needle)[0];
  // using for loop
  for (let i = array.length - 1; i >= 0; i--) {
    if (array[i][needleKey] === needle[needleKey])
    return i;
  }
  return -1;
};