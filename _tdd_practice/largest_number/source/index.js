const add = require('./add');

try {
  console.log(add(5, 46));
  // if the command above err, below is the handling gracefully
} catch(err) {
  console.log(err.message);
} finally {
  console.log("I'm a message inside 'finally block!'");
}

console.log('Program runs');
