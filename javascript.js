function add(a,b) {
    return a + b;
}

function subtract(a,b) {
    return a - b;
}

function multiply(a,b) {
    return a * b;
}

function divide(a,b) {
    return a / b;
}

let operand1;
let operand2;
let operator;

function operate(a,b,c) {
    if (c == '+') {
        return add(a,b);
    } else if (c == '-') {
        return subtract(a,b);
    } else if (c == '*') {
        return multiply(a,b);
    } else if (c == '/') {
        return divide(a,b);
    }
}

const digits = document.querySelectorAll('.digit');
const display = document.querySelector('.display');
const operatorButton = document.querySelectorAll('.operator');
const clearButton = document.querySelector('.clear')

clearButton.addEventListener('click', () => {
    display.textContent = ''
})

digits.forEach((digit) => {
    digit.addEventListener('click', () => {
        display.textContent = display.textContent + digit.textContent;
    })
})

operatorButton.forEach((operatorSign) => {
    operatorSign.addEventListener('click', () => {
        operator = operatorSign.textContent;
        if (operand1 === undefined) {
            operand1 = parseFloat(display.textContent)
        } else {
            operand2 = parseFloat(display.textContent)
        }

    })
})