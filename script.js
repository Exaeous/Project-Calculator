"use strict";

let firstNumber = 2;
let secondNumber = 4;
let operator = "+";

let displayValue = 0;

const numberButtons = document.querySelectorAll(".number-btn");
const operatorButtons = document.querySelectorAll(".operator-btn");
const equalButton = document.querySelector(".equal-btn");
const displayArea = document.querySelector(".result");

numberButtons.forEach((numberBtn) => {
  numberBtn.addEventListener("click", () => {
    displayArea.textContent += numberBtn.textContent;
  });
});

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
