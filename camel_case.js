/* Convert to camelCase
We used snake_case a lot in Ruby. But now we're living in a JavaScript world where the convention is to use camelCase. Write a function that converts any snake or kebab case string (aka dash/underscore delimited words) and converts it to camel case. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

e.g. 
toCamelCase("foo_bar") // returns "fooBar" 
toCamelCase("Hello-there") // returns "HelloThere"
to CamelCase("") // returns "" 
*/ 

// ! This method is not recommended
function toCamelCaseZaid(str) { 
  let finalString = '';
  let array = [];

  if (str.includes('-')) {
      array = str.split('-');
  } else if (str.includes('_')) {
      array = str.split('_')
  }

  for (let i = 0; i < array.length; i++) {
      if (i == 0) {
          finalString = finalString + array[i]
      } else if (i > 0) {
          finalString = finalString + array[i][0].toUpperCase() + array[i].slice(1).toLowerCase()
      }
  }
  return finalString
}

function toCamelCaseSam(str) { 
  let newStr  = str.replace(/[^a-zA-Z ]/g, " ")
  let arrayOfWords = newStr.split(" ")
  let arr = []

  for(let i = 1; i < arrayOfWords.length; i++) {
    arr.push(arrayOfWords[i][0].toUpperCase() + arrayOfWords[i].slice(1))
  }

  arr.unshift(arrayOfWords[0])
  return str === "" ? "" : arr.join("")
  
}

// ! Below method doesn't deal with '.'
function toCamelCase(str) {
  // replace underscore and dashes with space, then split the array
  let splitArr = str.replace(/[_-]/g, ' ').split(' ');

  // slice the array to get the first word only
  let firstWords = splitArr.slice(0, 1);

  // for the remainder of the array, capitalise first letters
  let camelCased = splitArr.slice(1).map(word => word[0].toUpperCase() + word.slice(1))

  // concat two arrays into one and join the array
  return firstWords.concat(camelCased).join('')

}

function toCamelCaseNam(str) {
  // gets rid of -, _, spaces and . and capitalises next letter
  return str.replace(/[-_\s.]+(.)?/g, (_, c) => c ? c.toUpperCase() : '');
}

const input = "this.should_return-camel case"
console.log(toCamelCaseZaid(input)); 
console.log(toCamelCaseSam(input));
console.log(toCamelCase(input));
console.log(toCamelCaseNam(input));
  