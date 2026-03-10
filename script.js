"use strict";

let firstOperand = [];
let secondOperand = [];
let operator = "";

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
let result = document.querySelector(".result");

operandButtons.forEach((operandButton) => {
  operandButton.addEventListener("click", (event) => {
    if (operator === "") {
      return getFirstOperands(event);
    } else if (operator !== "" && firstOperand.length > 0) {
      return getSecondOperand(event);
    }
  });
});

operatorButtons.forEach((operatorButton) => {
  operatorButton.addEventListener("click", (event) => getOperator(event));
});

function getFirstOperands(event) {
  firstOperand.push(event.target.textContent);
  result.textContent = parseInt(firstOperand.join(""));

  return firstOperand;
}

function getSecondOperand(event) {
  secondOperand.push(event.target.textContent);
  result.textContent = parseInt(secondOperand.join(""));

  return secondOperand;
}

function getOperator(event) {
  if (operator === "") {
    operator = event.target.textContent;
    return operator;
  }
}
