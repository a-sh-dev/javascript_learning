// ! From W03 Learning Materials -> Error Handling Callbacks

function doMath(num1, num2, callback) {
  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    const err = new Error("Can only perform math on numbers")
    return callback(err)
  }
  callback(null, num1, num2);
}

function multiply(err, a, b) {
  if (err) {
    return console.error(err.message)
  }
  console.log(a * b);
}

function add(err, x, y) {
  if (err) {
    return console.error(err.message)
  }
  console.log(x + y);
}

doMath(2, "5", multiply);
doMath(98, "87", add);

// * Another example

function useName(name, callback) {
  if (typeof name != 'string') {
    const error = new Error("Name must be a string")
    callback(error);
  } else if (name.length < 1) {
    const error = new Error("Name cannot be empty")
    callback(error);
  } else {
    callback(null, name);
  }
}

function greet(error, name) {
  if (error) {
    console.log(error.message)
    return
  }
  console.log("Hello " + name);
}

useName("Bobo", greet);