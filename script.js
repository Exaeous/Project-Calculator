"use strict";

let firstNumber = 2;
let secondNumber = 4;
let operator = "*";

const numberButtons = document.querySelectorAll(".number-btn");
const operatorButtons = document.querySelectorAll(".operator-btn");
const equalButton = document.querySelector(".equal-btn");
const displayArea = document.querySelector(".result");

function operate(firstNumber, secondNumber, operator) {
  switch (operator) {
    case "+":
      console.log(firstNumber + secondNumber);
      break;
    case "-":
      console.log(firstNumber - secondNumber);
      break;
    case "*":
      console.log(firstNumber * secondNumber);
      break;
    case "/":
      console.log(firstNumber / secondNumber);
      break;
    default:
      console.log("Invalid Operation");
  }
}
operate(firstNumber, secondNumber, operator);
