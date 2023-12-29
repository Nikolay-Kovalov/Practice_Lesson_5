let display = document.getElementById('display');
let calculator = document.querySelector('.calculator');

// calculator.style.height = `${document.documentElement.clientHeight}px`

// console.log(document.documentElement.clientHeight)


function appendToDisplay(value) {

    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error'
    }
}

function calculateCos() {
    let result = Math.cos(eval(display.value))
    display.value = result.toFixed(2);
}

function calculateSin() {
    let result = Math.sin(eval(display.value))
    display.value = result.toFixed(2);
}

function calculateTan() {
    let result = Math.tan(eval(display.value))
    display.value = result.toFixed(2);
}

function calculateCot() {
    let result = 1 / Math.tan(eval(display.value))
    display.value = result.toFixed(2);
}

function calculateSqrt() {
    let result = Math.sqrt(eval(display.value))
    display.value = result.toFixed(2);
}

function calculateSquareRoot() {
    let result = eval(display.value) ** 2;
    display.value = result.toFixed(2);
}