// * Method 1: Using sort -> fails mutate test
// const largestNumber = arr => {
//   if (arr.length < 1) return null;

//   const sortedArr = arr.sort((a, b) => b - a);
//   return sortedArr.last();

// }

// * Method 2: Verbose
// const largestNumber = arr => {
//   if (arr.length === 0) return null;
//   let largest = arr[0];

//   for (let i = 0; i <= arr.length; i++) {
//     if (arr[i] > largest) {
//       largest = arr[i];
//     }
//   }
//   return largest;
// }

// * Method 3: Math.max()
const largestNumber = arr => {
  if (arr.length === 0) return null;
  return Math.max(...arr); // Using SPREAD -> automatically flattens an array and spread the values as Math.max doesn't accept array as input
}



module.exports = {
  // largestNumber: largestNumber;
  // if the key and value are the same like above, we can use shorthand:
  largestNumber
}