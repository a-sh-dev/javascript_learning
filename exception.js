// Similar to Begin -> Rescue in Ruby

try {
  throw "This is an error"
} catch (e) {
  console.log(`Error: ${e}`)
} finally {
  console.log("Finally!")
}

// The above will output:
// Error: This is an error
// Finally!
// ! The finally block will always run regardless of whether an error orccured or not. Usefull when there are any cleanup steps to be performed, such as closing database connections. Putting those steps in a finally block means that if an error occurs within the try block before an action is complete (like accessing data in a database), the system will always be brought back to a known, secure, and stable state (such as closing database connections to avoid unintended access).

// ! For example:

function subtract(num1, num2) {
  let answer;

  try {
    answer = num1 + num2
    if (isNaN(answer)) {
      throw "Invalid input. Only numbers allowed.";
    }
    return answer
  } catch (e) {
    console.log(`Error: ${e}`);
  }
}

console.log(subtract(15, "hello"));

