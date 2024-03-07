/**
 * Stop gninnipS My sdroW!
 * Write a function that takes in a string of one or more words, and returns the same string, but with all words that have five or more letters reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.
 * E.g:
 * "Hey fellow warriors"  --> "Hey wollef sroirraw"
 * "This is a test"       --> "This is a test"
 * "This is another test" --> "This is rehtona test"
 */
function spinWords(string) {
  const words = string.split(' ');
  return words
    .map((word) => {
      const letters = word.split('');
      return letters.length >= 5 ? letters.reverse().join('') : word;
    })
    .join(' ');
}

spinWords('Hey fellow warriors'); // "Hey wollef sroirraw"

// With regex
function spinWordsRegex(string) {
  return string.replace(/\w{5,}/g, (w) => {
    return w.split('').reverse().join('');
  });
}

spinWordsRegex('Hey fellow warriors'); // "Hey wollef sroirraw"
