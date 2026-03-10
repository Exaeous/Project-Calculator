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
const clearButton = document.querySelector(".clear");
const calculateButton = document.querySelector(".calculate");

let result = document.querySelector(".result");

clearButton.addEventListener("click", () => clearEverything());

calculateButton.addEventListener("click", () => {
  const numberOne = Number(firstOperand.join(""));
  const numberTwo = Number(secondOperand.join(""));

  const finalResult = operate(operator, numberOne, numberTwo);

  result.textContent = finalResult;

  firstOperand = [finalResult.toString()];
  secondOperand = [];
  operator = "";
});

operandButtons.forEach((operandButton) => {
  operandButton.addEventListener("click", (event) => {
    if (operator === "") {
      return getFirstOperand(event);
    } else if (operator !== "" && firstOperand.length > 0) {
      return getSecondOperand(event);
    }
  });
});

operatorButtons.forEach((operatorButton) => {
  operatorButton.addEventListener("click", (event) => getOperator(event));
});

function getFirstOperand(event) {
  firstOperand.push(event.target.textContent);
  result.textContent = parseInt(firstOperand.join(""));
  console.log("First operand", firstOperand);
  return parseInt(firstOperand.join(""));
}

function getSecondOperand(event) {
  secondOperand.push(event.target.textContent);
  result.textContent = parseInt(secondOperand.join(""));
  console.log("Second operand", secondOperand);
  return parseInt(secondOperand.join(""));
}

function getOperator(event) {
  if (operator === "") {
    operator = event.target.textContent;
  }
  console.log(operator);
  return operator;
}

function clearEverything() {
  firstOperand = [];
  secondOperand = [];
  operator = "";
  result.textContent = "";
}
