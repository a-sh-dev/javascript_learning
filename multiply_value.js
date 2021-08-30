/*
Multiply Value
Create a function which will take a string or number value and multiply it a specific number of times. 

The first parameter is the value to be multiplied. 
The second parameter is the number of times the value should be multiplied.

If the first parameter is not a number or string, the function should return null.

If the second parameter is not a valid number the code should return null.

Examples:
multiplyValue(9,2) == 9 * 2 == 18
multiplyValue("[alright]",3) == "[alright]" + "[alright]" + "[alright]" == "[alright][alright][alright]"
multiplyValue(5,["kanye west"]) == null
*/

function multiplyValueAlex(value, times) {
  if ((typeof value !== 'number' && typeof value !== 'string') || (typeof times !== 'number')) return null;

  if (typeof value === 'number') return value * times;

  if (typeof value === 'string') return value.repeat(times);
}

function multiplyValueDanny(value, times) {
  if (typeof times === 'number') {
    if (typeof value === 'number') {
      return value * times;
    } else if (typeof value === 'string') {
      return value.repeat(times);
    } else {
      return null;
    }
  } else {
    return null;
  }
}

// * Oldschool way -> with Object.is
function multiplyValueObject(value, times) {
  let result = value * times;

  if (Object.is(result, NaN)) {
    result = null;
    if (typeof value === 'string' && typeof times === 'number') {
      result = '';
      for (let i = 1; i <= times; i++) {
        result += value;
      }
    }
  }
  return result;
}
