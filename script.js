let displayValue = ""; // Bottom display UI, current number user inputs
let secondDisplayValue = ""; // Top display UI, number from "displayValue" after operation goes to this value
let operationVal = "";
let decimalDot = false;

let buttons = document.querySelectorAll('.calc__btn');
let mainDisplay = document.querySelector('.calc__main-display');
let seconDisplay = document.querySelector('.calc__second-display');

buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        if (!isNaN(e.target.textContent) || e.target.textContent === ".") {
            numberPress(e.target.textContent);
        } else {
            actionPress(e.target.textContent);
        }
    })
})

function add(a, b) {
    return a + b
}
function subtract(a, b) {
    return a - b
}
function multiply(a, b) {
    return a * b
}
function divide(a, b) {
    return a / b
}

function operate(operator, num1, num2) {
    let number1 = parseFloat(num1);
    let number2 = parseFloat(num2)

    switch (operator) {
        case "+":
            return add(number1, number2);
        case "-":
            return subtract(number1, number2);
        case "*":
            return multiply(number1, number2);
        case "/":
            return divide(number1, number2);
        case "":
            console.log("Error");
        default:
            console.log("Something wrong with operator")
    }
}

function actionPress(operation) {
    decimalDot = false;
    switch (operation) {
        case 'CLEAR':
            clearDisplay();
            break;
        case 'DELETE':
            deleteLastString();
            break;
        case '=':
            equal();
            break;
        default:
            // OPERATIONS LIKE + - / *
            if (!secondDisplayValue) {
                secondDisplayValue = `${displayValue}`;
                operationVal = operation;
                displayValue = '';
            } else {
                calculate();
                operationVal = operation;
            }
            updateScreen();
    }
}

function equal() {
    if (displayValue && secondDisplayValue) {
        calculate();
    } else {
        console.log("Please insert value")
    }
}

function calculate() {
    let answer = operate(operationVal, secondDisplayValue, displayValue);
    if (answer === undefined) {
        console.log("Use operation")
    } else {
        secondDisplayValue = Math.round(answer * 100) / 100;
        displayValue = '';
        operationVal = '';
    }
    updateScreen()
}

function numberPress(number) {
    // Decimal logic just one input
    if (number === '.') {
        if (decimalDot) return
        decimalDot = true;
    }
    if (!displayValue) {
        displayValue = number;
    } else {
        displayValue = `${displayValue}${number}`
    }
    updateScreen();
}

function updateScreen() {
    mainDisplay.innerHTML = displayValue;
    seconDisplay.innerHTML = `${secondDisplayValue} ${operationVal}`;
}

function clearDisplay() {
    displayValue = "";
    secondDisplayValue = "";
    operationVal = "";
    updateScreen();
}

function deleteLastString() {
    let str = displayValue.slice(0, -1);
    displayValue = str;
    updateScreen();
}
