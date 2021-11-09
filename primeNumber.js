// ! Refer to .md file for instruction

//* Alex's solution
function range(start, end) {
  let arr = [];
  arr.push(start);
  for (let i = 0; arr[i] < end; i++) {
    start++;
    arr.push(start);
  }
  return arr;
}

function primeNumber(n) {
  // Create an array with all numbers from 2 to n
  let numArr = range(2, n);
  let prime;

  // While we haven't eliminated all numbers up to n,
  // apply the sieve of eratostheness
  while (numArr.length > 0) {
    // Set the next prime number and remove that from numArr
    // Take the first number from the array
    prime = numArr.shift();
    // Remove multiples of prime from the array
    numArr.forEach((num, index) => {
      // return if the number is prime number
      if (prime === num) {
        return num;
      }
      // Remove all multiples of prime
      if (num % prime === 0) {
        numArr.splice(index, 1);
      }
    });
  }
  return prime;
}

console.log(primeNumber(45));
console.log(primeNumber(7));

//* Nick's solution
function isPrime(num) {
  let prime = true;
  for (let i = 2; i < Math.ceil(Math.sqrt(num)); i++) {
    // sqrtnum + 1
    if (num % i === 0) {
      prime = false;
      break;
    }
  }
  return prime;
}

function primeNumberNick(number) {
  for (i = number; i >= 1; i--) {
    if (isPrime(i)) {
      return i;
    }
  }
}

console.log(primeNumberNick(45));
console.log(primeNumberNick(7));
