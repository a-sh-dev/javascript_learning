// Generator function

function* idSequence() {
  let i = 0;
  // yield keyword can be used to process and return data
  // on-demand, in an infinite sequence
  while (true) {
    yield i++;
  }
}

const generateID = idSequence();

console.log(generateID.next().value);
console.log(generateID.next().value);
console.log(generateID.next().value);
