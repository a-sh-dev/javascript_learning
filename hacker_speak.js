/*
* Hacker Speak - Create a function that takes a string as input, and returns a coded version of the string. For this to happen, replace all (lowercase and uppercase) vowels with numbers: 
'a' -> 0
'e' -> 1
'i' -> 2
'o' -> 3
'u' -> 4
e.g - hackerSpeak("Ha ha ha"); // returns  H0 h0 h0
hackerSpeak("How about this string?") // returns H3w 0b34t th2s str2ng?
(hackerSpeak("A bit of a challenge!")); //returns  0 b2t 3f 0 ch0ll1ng1!
*/

const hackerSpeak = (str) => {
  const codedStr = ['a', 'e', 'i', 'o', 'u'];
  // const codedStr = Array.from('aeiou', letter => letter)

  let strArray = str.split('')

  strArray.map((letter, index) => {
    letter = letter.toLowerCase();
    // * SPLICE params: the index value to remove, how many elements, replace with...
    if (codedStr.includes(letter)) {
      strArray.splice(index, 1, codedStr.indexOf(letter))
    } 
  })

  return strArray.join('');

}

console.log(hackerSpeak('Ha ha ha'));
console.log(hackerSpeak('How about this string?'));
console.log(hackerSpeak('A bit of a challenge!'));