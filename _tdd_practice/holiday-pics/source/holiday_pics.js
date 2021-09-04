// * Method 1 
// function holidayPics(arr, n) {
//   let counts = {};
//   let array = [];
//   arr.forEach( i => {
//     counts[i] = (counts[i] || 0) + 1;
//     if (counts[i] <= n) {
//       array.push(i);
//     }
//   });
//   return array;
// }

// * Method 2
function holidayPics(arr, n) {
  let frequencies = {};
  let pics = [];

  arr.forEach(num => {
    frequencies[num] = (frequencies[num] ?? 0) + 1;
    // ?? is like || but returns the right side if the left side is null or undefined, instead of falsy
    if (frequencies[num] <= n) pics.push(num);
  });

  // Or use for
  // for (let num of arr) {
  //   frequencies[num] = (frequencies[num] ?? 0) + 1;
  //   if (frequencies[num] <= n) pics.push(num);
  // }

  return pics;
}

module.exports = holidayPics