const digits = document.querySelectorAll('.digit')
const display = document.querySelector('#calculator-display')
const operators = document.querySelectorAll('.operator')
const clear = document.querySelector('#clear')
const equals = document.querySelector('#equals')


let a = ''
let b = ''
let mainOperator = ''
let secundaryOperator = ''
let result = ''

const add = (a, b) => a + b
const subtract = (a, b) => a - b
const multiply = (a, b) => a * b
const divide = (a, b) => b != 0 ? a / b : 'error'

const operate = (a, b, operator) => {
    switch (operator) {
        case '+':
            return add(a, b)
        case '-':
            return subtract(a, b)
        case '*':
            return multiply(a, b)
        case '/':
            return divide(a, b)
        default:
            break;
    }
}

const updateDisplay = () => {
    display.textContent = `${result} ${a} ${mainOperator} ${b} ${secundaryOperator}`
}

const clearDisplay = () => {
    a = ''
    b = ''
    mainOperator = ''
    secundaryOperator = ''
    updateDisplay()
}

digits.forEach((digit) => {
    digit.addEventListener('click', () => {

        if (mainOperator == '') {
           if (result != '') {
            result = ''            
        }
            if (digit.textContent == '.' && a.includes('.')) {
                return
            } else {
                a += digit.textContent
            }
        } else if (secundaryOperator == '') {
            if (digit.textContent == '.' && b.includes('.')) {
                return
            } else {
                b += digit.textContent
            }
        }
        updateDisplay()
    })
})

operators.forEach((operator) => {
    operator.addEventListener('click', () => {
        if (a != '' && b == '') {
            mainOperator = operator.textContent
            updateDisplay()
        } else if (mainOperator != '' && b != '') {
            secundaryOperator = operator.textContent
            updateDisplay()
        }
    })

})

equals.addEventListener('click', () => {
    result = operate(Number(a), Number(b), mainOperator)
    a = ''
    b = ''
    mainOperator = ''
    if (secundaryOperator != '') {
        a = result
        mainOperator = secundaryOperator
    }
    secundaryOperator = ''
    updateDisplay()
})

clear.addEventListener('click', clearDisplay)

