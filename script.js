const add = (a, b) => a + b
const subtract = (a, b) => a - b
const multiply = (a, b) => a * b
const divide = (a, b) => b != 0 ? a / b : 'error'

const operate = (a, b, operator) => {
    switch (operator) {
        case '+':
            add(a, b)
            break;
        case '-':
            subtract(a, b)
            break;
        case '*':
            multiply(a, b)
            break;
        case '/':
            divide(a, b)
            break;
        default:
            break;
    }
}