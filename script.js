"use strict";

let firstOperand = 0;
let secondOperand = 0;
let operator = "+";

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

let operandButtons = document.querySelectorAll(".operand");
let result = document.querySelector(".result");

operandButtons.forEach((operandButton) => {
  operandButton.addEventListener("click", (event) => {
    result.textContent = event.target.textContent;
    // firstOperand = event.target.textContent;
  });
});
