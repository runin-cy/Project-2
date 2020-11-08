// BUTTONS ON THE PAGE
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const equalButton = document.querySelector('.equal');
const clearButton = document.querySelector('.clear');

// TODO make references to all the proper HTML elements you'll be using to display elements to the user
const firstNumber = document.querySelector('first-number');
const operator = document.querySelector('operator');
const secondNumber = document.querySelector('second-number');
const result = document.querySelector('result');
const clear = document.querySelector('button-clear');

// TODO make variables to keep track of the 1st number, operator, 2nd number, and the result of the math.
var one = document.getElementById('first-number');
var sign = document.getElementById('operator');
var two = document.getElementById('second-number');
var equal = document.getElementById('result');

for(let i = 0; i < numberButtons.length; i++) {
  numberButtons[i].addEventListener('click', clickNumber);
}
for(let i = 0; i < operatorButtons.length; i++) {
  operatorButtons[i].addEventListener('click', clickOperator);
}
equalButton.addEventListener('click', clickEqualButton);
clearButton.addEventListener('click', clickClearButton);

function clickNumber(event) {
  console.log(event.target.value);
  // CODE GOES HERE 
  one += ''
  console.log(one);
  two += ''
  console.log(two);
}

function clickOperator(event) {
  console.log(event.target.value);
  // CODE GOES HERE

}

function clickEqualButton() {
  // CODE GOES HERE
  if (operator == '+') {
    equal = one + two;
}
else if (operator == '-') {
    equal = one - two;
}
else if (operator == '*') {
    equal = one * two;
}
else {
    equal = one / two;
} 
console.log(result);
}

function clickClearButton() {
  // CODE GOES HERE
  document.getElementById("button-clear");
}