const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
const multiply = (x, y) => x * y;
const divide = (x, y) => x / y;
const remainder = (x, y) => x % y;
const power = (x, y) => x ** y;

function calculate(x, operator, y) {
  if (operator === "+") {
    return add(x, y);
  } else if (operator === "-") {
    return subtract(x, y);
  } else if (operator === "*") {
    return multiply(x, y);
  } else if (operator === "/") {
    if (y === 0) {
      return "Cannot divide by zero";
    }
    return divide(x, y);
  } else if (operator === "%") {
    return remainder(x, y);
  } else if (operator === "**") {
    return power(x, y);
  } else {
    return "Unknown operator";
  }
}

// const prompt = require("prompt-sync")();

// const firstNumber = Number(prompt("Enter first number: "));
// const operator = prompt("Enter operator (+, -, *, /, %, **): ");
// const secondNumber = Number(prompt("Enter second number: "));

// if (Number.isNaN(firstNumber) || Number.isNaN(secondNumber)) {
//   console.log("Please enter valid numbers");
// } else {
//   console.log("Result:", calculate(firstNumber, operator, secondNumber));
// }
const prompt = require("prompt-sync")();

while (true) {
  const firstInput = prompt("Enter first number (or q to quit): ");

  if (firstInput === "q") {
    console.log("Goodbye!");
    break;
  }

  const firstNumber = Number(firstInput);
  const operator = prompt("Enter operator (+, -, *, /, %, **): ");
  const secondNumber = Number(prompt("Enter second number: "));

  if (Number.isNaN(firstNumber) || Number.isNaN(secondNumber)) {
    console.log("Please enter valid numbers");
  } else {
    console.log("Result:", calculate(firstNumber, operator, secondNumber));
  }
}