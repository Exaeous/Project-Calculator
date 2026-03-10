"use strict";

let firstOperand = 0;
let secondOperand = 0;
let operator = " ";

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

function operate(operator, firstOperand, secondOperand) {
  switch (operator) {
    case "+":
      return add(firstOperand, secondOperand);
    case "-":
      return subtract(firstOperand, secondOperand);
    case "*":
      return multiply(firstOperand, secondOperand);
    case "/":
      return divide(firstOperand, secondOperand);
  }
}

const operandButtons = document.querySelectorAll(".operand");
const operatorButtons = document.querySelectorAll(".operator");
const result = document.querySelector(".result");

operandButtons.forEach((operandButton) => {
  operandButton.addEventListener("click", (event) => {
    firstOperand = event.target.textContent;
  });
});

operatorButtons.forEach((operatorButton) => {
  operatorButton.addEventListener("click", (event) => {
    operator = event.target.textContent;
  });
});
