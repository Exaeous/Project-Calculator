"use strict";

let firstNumber = 2;
let secondNumber = 4;
let operator = "*";

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(firstNumber, secondNumber, operator) {
  switch (operator) {
    case "+":
      console.log(add(firstNumber, secondNumber));
      break;
    case "-":
      console.log(subtract(firstNumber, secondNumber));
      break;
    case "*":
      console.log(multiply(firstNumber, secondNumber));
      break;
    case "/":
      console.log(divide(firstNumber, secondNumber));
      break;
  }
}

operate(firstNumber, secondNumber, operator);
