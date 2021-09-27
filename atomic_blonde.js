/* ! ATOMIC BLOND 
  A number is an atomic blonde number if the sum and product of its digits are equal. Write a program to check if a number is an atomic blonde number or not. 
  E.g. atomicBlonde(123), should return true (as 1 + 2 + 3 equals 6, as does 1 * 2 * 3)
  E.g. atomicBlonde(23), should return false (as 2 + 3 equals 5, whereas  2 * 3 equals 6)
*/

const atomicBlonde = (num) => {
	
  // ! Split is a String method. So the numbers has to be converted to string first, then be converted back to number
  let numArray = num.toString().split('').map(Number);
	// * the same as:
  // const digits = num.toString().split('').map(str => Number(str));

	let numSum = 0;
	let numProd = 1;

	numArray.forEach(num => {
		// console.log(num)
		numSum += num
		numProd *= num
	})

	return numSum === numProd
}

const atomicBlonde2 = (num) => {
  
  let digits = num.toString().split('').map(Number);

  // * Use Reduce
  const sum = digits.reduce((initial, next) => {
    return initial + next;
  }, 0);

  const product = digits.reduce((initial, next) => {
    return initial * next;
  }, 1);

  return sum === product

}

const atomicBlonde3 = (num) => {
  
  let digits = num.toString().split('').map(Number);

  // * Use for of
  let sum = 0;
  let product = 1;

  for (let digit of digits) {
    sum += digit
    product *= digit
  }

  return sum === product

}

console.log(atomicBlonde(123))
console.log(atomicBlonde2(123))
console.log(atomicBlonde3(123))

console.log(atomicBlonde(23))
console.log(atomicBlonde2(23))
console.log(atomicBlonde3(23))