// ! Progamiz - https://www.programiz.com/javascript/switch-statement

// Program for a simple calculator
let result;

// Take the operator input
const operator = prompt("Enter operator ('+', '-', '*' or '/'): ");

// Take the operand input
const number1 = parseFloat(prompt("Enter the first number: "));
const number2 = parseFloat(prompt("Enter the second number: "));

switch(operator) {
  case "+":
    result = number1 + number2;
    console.log(`${number1} + ${number2} = ${result}`);
    break;
  case "-":
    result = number1 - number2;
    console.log(`${number1} - ${number2} = ${result}`);
    break;
  case "*":
    result = number1 * number2;
    console.log(`${number1} * ${number2} = ${result}`);
    break;
  case "/":
    result = number1 / number2;
    console.log(`${number1} / ${number2} = ${result}`);
    break;

  default:
    console.log("Invalid operator");
    break;
}

// Output
// Enter operator: +
// Enter the first number: 4
// Enter the second number: 5
// 4 + 5 = 9