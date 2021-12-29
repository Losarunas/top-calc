let buttons = document.querySelectorAll('.calc__btn');

buttons.forEach(button => {
    button.addEventListener("click", (e) => console.log(e.target.textContent))
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
    switch (operator) {
        case "+":
            return add(num1, num2);
        case "-":
            return subtract(num1, num2);
        case "*":
            return multiply(num1, num2);
        case "/":
            return divide(num1, num2);
        default:
            console.log("Something wrong with operator")
    }
}

console.log(operate("+", 2, 1));