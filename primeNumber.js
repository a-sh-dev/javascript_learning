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

//* Nam's solution
function primeNumberNam(max) {
  const start = 2;
  // creates array from 2 through to max
  const range = Array(max - start + 1)
    .fill()
    .map((_, index) => start + index);
  // removes non-prime numbers from array
  const primes = range.filter((number) => {
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) return false;
    }
    return true;
  });
  return primes.at(-1); // returns last number of array
}

console.log(primeNumberNam(45));
console.log(primeNumberNam(7));
