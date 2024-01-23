"use strict";

// let firstNumber = 2;
// let secondNumber = 4;
// let operator = "+";

// Basic Operations

// Addition
function add(a, b) {
  return a + b;
}

// Subtraction
function subtract(a, b) {
  return a - b;
}

//Multiplication
function multiply(a, b) {
  return a * b;
}

//Division
function divide(a, b) {
  return a / b;
}

//Operation
function operation(firstNumber, secondNumber, operator) {
  switch (operator) {
    case "+":
      return add(firstNumber, secondNumber);
    case "-":
      return subtract(firstNumber, secondNumber);
    case "*":
      return multiply(firstNumber, secondNumber);
    case "/":
      return divide(firstNumber, secondNumber);
    default:
      return "Error";
  }
}

console.log(operation(2, 2, "/"));
