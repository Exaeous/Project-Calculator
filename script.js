"use strict";

let firstNumber = "";
let secondNumber = "";
let operator = "";

const numberButtons = document.querySelectorAll(".number-btn");
const operatorButtons = document.querySelectorAll(".operator-btn");
const equalButton = document.querySelector(".equal-btn");
const result = document.querySelector(".result");

numberButtons.forEach((numberButton) => {
  numberButton.addEventListener("click", () => {
    if (operator === "") {
      firstNumber += numberButton.textContent;
      result.textContent += numberButton.textContent;
    } else {
      secondNumber += numberButton.textContent;
      result.textContent += numberButton.textContent;
    }
  });
});

operatorButtons.forEach((operatorButton) => {
  operatorButton.addEventListener("click", () => {
    operator = operatorButton.textContent;
    result.textContent += operator;
  });
});

equalButton.addEventListener("click", () => {
  operate(firstNumber, secondNumber, operator);
});

function operate(firstNumber, secondNumber, operator) {
  switch (operator) {
    case "+":
      result.textContent = parseFloat(firstNumber) + parseFloat(secondNumber);
      break;
    case "-":
      result.textContent = parseFloat(firstNumber) - parseFloat(secondNumber);
      break;
    case "*":
      result.textContent = parseFloat(firstNumber) * parseFloat(secondNumber);
      break;
    case "/":
      result.textContent = parseFloat(firstNumber) / parseFloat(secondNumber);
      break;
    default:
      console.log("Invalid Operation");
  }
}
