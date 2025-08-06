const CALC_FRAME = document.querySelector("#frame");
const CALC_DISPLAY = document.querySelector("#display");
const CLEAR_BTN = document.querySelector("#clear");
const EQUALS_TO_BTN = document.querySelector("#equals_to");
const NUM7 = document.querySelector("#num7");
const NUM8 = document.querySelector("#num8");
const NUM9 = document.querySelector("#num9");
const NUM4 = document.querySelector("#num4");
const NUM5 = document.querySelector("#num5");
const NUM6 = document.querySelector("#num6");
const NUM1 = document.querySelector("#num1");
const NUM2 = document.querySelector("#num2");
const NUM3 = document.querySelector("#num3");
const OP_PLUS = document.querySelector("#op_plus");
const OP_MINUS = document.querySelector("#op_minus");
const OP_MULTIPLY = document.querySelector("#op_multiply");
const OP_DIVIDE = document.querySelector("#op_divide");
let LHSNo = "";
let RHSNo = "";
let operator = "";
let output = "";
let isOpPressed = false;

function getSum(firstNumber, secondNumber){
    return firstNumber + secondNumber;
}
function getDifference(firstNumber, secondNumber){
    return firstNumber - secondNumber;
}
function getProduct(firstNumber, secondNumber){
    return firstNumber * secondNumber;
}
function getDivision(firstNumber, secondNumber){
    return firstNumber/secondNumber;
}
function operate(operator, firstNumber, secondNumber){
    let number1 = Number(firstNumber);
    let number2 = Number(secondNumber);
    switch(operator){
        case "+":
            return getSum(number1, number2);
        case "-":
            return getDifference(number1, number2);
        case "*":
            return getProduct(number1, number2);
        case "/":
            return getDivision(number1, number2);
    }
}