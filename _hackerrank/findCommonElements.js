/**
 * Find common elements between two arrays
 */

const findCommonElements = (arr1, arr2) => {
  let result = arr1.filter((num) => arr2.includes(num));
  return [...new Set(result)];
};

findCommonElements([1, 2, 3, 4], [3, 4, 5, 6]);
findCommonElements([1, 2, 3, 4], [5, 6, 7, 8]);
findCommonElements([1, 1, 2], [1, 1, 2]);
findCommonElements([1, 1, 1], [1, 1, 1]);
