/*
Common Characters
Write code which will return the common characters found in two different strings. Only return one copy of each common character. Character case should be ignored (your solution should be case-insensitive).

Examples:
commonCharacters("efg", "feg") => "efg"
commonCharacters("We are both dragon energy", "I am God's vessel") => "eaodg"
commonCharacters("Alright alright alright", "") => ""
*/

// Method 1:
function commonCharacters(string1, string2) {
  let common = [];
  // .replaceAll method returns a new string with all matches of a pattern replaced by a replacement
  for (char of string1.toLowerCase().replaceAll(' ', '')) {
    // .includes return true/false
    if (string2.toLowerCase().includes(char) && !common.includes(char)) {
      common.push(char);
    }
  }
  return common.join('');
}

// Method 2:
function commonCharacters2(string1, string2) {
  let resultArray = [];
  let str1Array = string1.toLowerCase().split('');
  let str1ArrayFiltered = [...new Set(str1Array)];

  str1ArrayFiltered.forEach((element) => {
    if (string2.includes(element) && element != ' ') resultArray.push(element);
  });
  return resultArray.join('');
}
