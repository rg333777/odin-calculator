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
    if (b == 0){
        return 'Dividing by zero is not allowed! Clear and try again'
    } else {
        return a / b
    }
}

let runningTotal;
let operand;
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
const equalsButton = document.querySelector('.equals')
let displayStatus

clearButton.addEventListener('click', () => {
    display.textContent = ''
    runningTotal = undefined
    operand = undefined
})

digits.forEach((digit) => {
    digit.addEventListener('click', () => {
        if (displayStatus === false) {
            display.textContent = '';
            displayStatus = true;
        }
        display.textContent = display.textContent + digit.textContent;
        operand = parseFloat(display.textContent);
    })
})

operatorButton.forEach((operatorInput) => {
    operatorInput.addEventListener('click', () => {
        if (runningTotal === undefined) {
            displayStatus = false
            runningTotal = operand;
            operand = undefined
            operator = operatorInput.textContent
            console.log('the operator when runningtotal is undef is: ' + operator)
        } else if (runningTotal !== undefined && operator !== undefined) {
            runningTotal = operate(runningTotal, operand, operator)
            display.textContent = runningTotal
            operand = undefined
            displayStatus = false
            operator = operatorInput.textContent
        } else if (operator == undefined) {
            operator = operatorInput.textContent
        }
    })
})

equalsButton.addEventListener('click', () => {
    if (runningTotal !== undefined && operand !== undefined && operator !== undefined) {
        display.textContent = ''
        runningTotal = operate(runningTotal, operand, operator)
        display.textContent = parseFloat(runningTotal)
        operator = undefined
        displayStatus = false
    }
})