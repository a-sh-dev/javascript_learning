const removeBackwards = (arr, index, numberToRemove) => {
  let copiedArr = [...arr];
  let startIndex = 0;

  if (numberToRemove < index) {
    startIndex = index - (numberToRemove - 1);
  } else {
    numberToRemove = index + 1;
  }

  copiedArr.splice(startIndex, numberToRemove);

  return copiedArr;
};

removeBackwards(['hello', 'world', 'is', 'my', 'first', 'program'], 4, 2);
removeBackwards(['hello', 'world', 'is', 'my', 'first', 'program'], 2, 10);
removeBackwards(
  [
    'design',
    'is',
    'not',
    'only',
    'feels',
    'and',
    'looks',
    'but',
    'also',
    'how',
    'it',
    'works',
  ],
  8,
  7,
);

// Er's solution
const removeBackwardsEr = (array, index, numberToRemove) => {
  const endIndex = index < 0 ? array.length - 1 : index;
  const startIndex = endIndex - numberToRemove + 1;

  return array.filter((_, index) => index < startIndex || index > endIndex);
};

removeBackwardsEr(['hello', 'world', 'is', 'my', 'first', 'program'], 4, 2);
removeBackwardsEr(['hello', 'world', 'is', 'my', 'first', 'program'], 2, 10);
removeBackwardsEr(
  [
    'design',
    'is',
    'not',
    'only',
    'feels',
    'and',
    'looks',
    'but',
    'also',
    'how',
    'it',
    'works',
  ],
  8,
  7,
);
