/*
This is a great question for interview prep, so let's not google it. Instead, try whiteboarding, and thinking of your approach before coding. There are multiple approaches to this question, so try to think of the most efficient one you can!


Write a function that will take a string as an argument. The method will check this string, and count the amount of 'x's and 'o's. It should return true if the amount of 'x's and 'o's are the same, and should return false if they are different. It should also be case insensitive.

E.g. exesAndOhs("ooxx") should return true
E.g. exesAndOhs("oOxXxoX") should return false
*/

// ! Longer version
const exesAndOhsLong = (string) => {
  let exes = 0;
  let ohs = 0;
  let stringArray = string.split('');
  for (let letter of stringArray) {
    if (letter.toLowerCase() === 'x') {
      exes++;
    }
    if (letter.toLowerCase() === 'o') {
      ohs++;
    }
  }
  return exes === ohs;
}

// ! Oneliner with regex
const exesAndOhs = (string) => {
  return (string.match(/x/gi) || []).length === (string.match(/o/gi) || []).length;
}