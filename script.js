const CALC_FRAME = document.querySelector(".frame");
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

CALC_FRAME.addEventListener("click",(e)=>{
    let target = e.target;
    switch(target.id){
        
        case "num7":
            if(isOpPressed === false){
                LHSNo += "7";
                CALC_DISPLAY.innerHTML = "";
                let displayElem = document.createElement("div");
                displayElem.textContent += LHSNo;
                displayElem.style.fontSize = "28px";
                CALC_DISPLAY.appendChild(displayElem);
            } else {
                RHSNo += "7";
                CALC_DISPLAY.innerHTML = "";
                let displayElem = document.createElement("div");
                displayElem.textContent += RHSNo;
                displayElem.style.fontSize = "28px";
                CALC_DISPLAY.appendChild(displayElem);
            }
            break;

        case "num8":
            if(isOpPressed === false){
                LHSNo += "8";
                CALC_DISPLAY.innerHTML = "";
                let displayElem = document.createElement("div");
                displayElem.textContent += LHSNo;
                displayElem.style.fontSize = "28px";
                CALC_DISPLAY.appendChild(displayElem);
            } else {
                RHSNo += "8";
                CALC_DISPLAY.innerHTML = "";
                let displayElem = document.createElement("div");
                displayElem.textContent += RHSNo;
                displayElem.style.fontSize = "28px";
                CALC_DISPLAY.appendChild(displayElem);
            }
            break;

        case "num9":
            if(isOpPressed === false){
                LHSNo += "9";
                CALC_DISPLAY.innerHTML = "";
                let displayElem = document.createElement("div");
                displayElem.textContent += LHSNo;
                displayElem.style.fontSize = "28px";
                CALC_DISPLAY.appendChild(displayElem);
            } else {
                RHSNo += "9";
                CALC_DISPLAY.innerHTML = "";
                let displayElem = document.createElement("div");
                displayElem.textContent += RHSNo;
                displayElem.style.fontSize = "28px";
                CALC_DISPLAY.appendChild(displayElem);
            }
            break;

        case "num4":
            if(isOpPressed === false){
                LHSNo += "4";
                CALC_DISPLAY.innerHTML = "";
                let displayElem = document.createElement("div");
                displayElem.textContent += LHSNo;
                displayElem.style.fontSize = "28px";
                CALC_DISPLAY.appendChild(displayElem);
            } else {
                RHSNo += "4";
                CALC_DISPLAY.innerHTML = "";
                let displayElem = document.createElement("div");
                displayElem.textContent += RHSNo;
                displayElem.style.fontSize = "28px";
                CALC_DISPLAY.appendChild(displayElem);
            }
            break;

        case "num5":
            if(isOpPressed === false){
                LHSNo += "5";
                CALC_DISPLAY.innerHTML = "";
                let displayElem = document.createElement("div");
                displayElem.textContent += LHSNo;
                displayElem.style.fontSize = "28px";
                CALC_DISPLAY.appendChild(displayElem);
            } else {
                RHSNo += "5";
                CALC_DISPLAY.innerHTML = "";
                let displayElem = document.createElement("div");
                displayElem.textContent += RHSNo;
                displayElem.style.fontSize = "28px";
                CALC_DISPLAY.appendChild(displayElem);
            }
            break;

        case "num6":
            if(isOpPressed === false){
                LHSNo += "6";
                CALC_DISPLAY.innerHTML = "";
                let displayElem = document.createElement("div");
                displayElem.textContent += LHSNo;
                displayElem.style.fontSize = "28px";
                CALC_DISPLAY.appendChild(displayElem);
            } else {
                RHSNo += "6";
                CALC_DISPLAY.innerHTML = "";
                let displayElem = document.createElement("div");
                displayElem.textContent += RHSNo;
                displayElem.style.fontSize = "28px";
                CALC_DISPLAY.appendChild(displayElem);
            }
            break;

        case "num1":
            if(isOpPressed === false){
                LHSNo += "1";
                CALC_DISPLAY.innerHTML = "";
                let displayElem = document.createElement("div");
                displayElem.textContent += LHSNo;
                displayElem.style.fontSize = "28px";
                CALC_DISPLAY.appendChild(displayElem);
            } else {
                RHSNo += "1";
                CALC_DISPLAY.innerHTML = "";
                let displayElem = document.createElement("div");
                displayElem.textContent += RHSNo;
                displayElem.style.fontSize = "28px";
                CALC_DISPLAY.appendChild(displayElem);
            }
            break;

        case "num2":
            if(isOpPressed === false){
                LHSNo += "2";
                CALC_DISPLAY.innerHTML = "";
                let displayElem = document.createElement("div");
                displayElem.textContent += LHSNo;
                displayElem.style.fontSize = "28px";
                CALC_DISPLAY.appendChild(displayElem);
            } else {
                RHSNo += "2";
                CALC_DISPLAY.innerHTML = "";
                let displayElem = document.createElement("div");
                displayElem.textContent += RHSNo;
                displayElem.style.fontSize = "28px";
                CALC_DISPLAY.appendChild(displayElem);
            }
            break;

        case "num3":
            if(isOpPressed === false){
                LHSNo += "3";
                CALC_DISPLAY.innerHTML = "";
                let displayElem = document.createElement("div");
                displayElem.textContent += LHSNo;
                displayElem.style.fontSize = "28px";
                CALC_DISPLAY.appendChild(displayElem);
            } else {
                RHSNo += "3";
                CALC_DISPLAY.innerHTML = "";
                let displayElem = document.createElement("div");
                displayElem.textContent += RHSNo;
                displayElem.style.fontSize = "28px";
                CALC_DISPLAY.appendChild(displayElem);
            }
            break;

        case "zero":
            if(isOpPressed === false){
                LHSNo += "0";
                CALC_DISPLAY.innerHTML = "";
                let displayElem = document.createElement("div");
                displayElem.textContent += LHSNo;
                displayElem.style.fontSize = "28px";
                CALC_DISPLAY.appendChild(displayElem);
            } else {
                RHSNo += "0";
                CALC_DISPLAY.innerHTML = "";
                let displayElem = document.createElement("div");
                displayElem.textContent += RHSNo;
                displayElem.style.fontSize = "28px";
                CALC_DISPLAY.appendChild(displayElem);
            }
            break;

        case "op_plus":
            operator = "+";
            isOpPressed = true;
            // if(RHSNo !== ""){
            //     LHSNo = operate(operator, LHSNo, RHSNo);
            //     LHSNo.toString();
            // }
            CALC_DISPLAY.innerHTML = "";
            let displayPlus = document.createElement("div");
            displayPlus.textContent += operator;
            displayPlus.style.fontSize = "28px";
            CALC_DISPLAY.appendChild(displayPlus);
            break;

        case "op_minus":
            operator = "-";
            isOpPressed = true;
            CALC_DISPLAY.innerHTML = "";
            let displayMinus = document.createElement("div");
            displayMinus.textContent += operator;
            displayMinus.style.fontSize = "28px";
            CALC_DISPLAY.appendChild(displayMinus);
            break;

        case "op_multiply":
            operator = "×";
            isOpPressed = true;
            CALC_DISPLAY.innerHTML = "";
            let displayMultiply = document.createElement("div");
            displayMultiply.textContent += operator;
            displayMultiply.style.fontSize = "28px";
            CALC_DISPLAY.appendChild(displayMultiply);
            break;

        case "op_divide":
            operator = "÷";
            isOpPressed = true;
            CALC_DISPLAY.innerHTML = "";
            let displayDivide = document.createElement("div");
            displayDivide.textContent += operator;
            displayDivide.style.fontSize = "28px";
            CALC_DISPLAY.appendChild(displayDivide);
            break;

        case "equals_to":
            output += operate(operator, LHSNo, RHSNo);
            CALC_DISPLAY.innerHTML = "";
            let displayOutput = document.createElement("div");
            displayOutput.textContent += output;
            displayOutput.style.fontSize = "28px";
            CALC_DISPLAY.appendChild(displayOutput);
            break;

        case "clear":
            CALC_DISPLAY.innerHTML = "";
            LHSNo = "";
            RHSNo = "";
            operator = "";
            output = "";
            isOpPressed = false;
            break;
    }
})