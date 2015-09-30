//Grab Elements
var clear = document.querySelector('#clear');
var answer = document.querySelector('#answer');
var seven = document.querySelector('#seven');
var eight = document.querySelector('#eight');
var nine = document.querySelector('#nine');
var divide = document.querySelector('#divide');
var four = document.querySelector('#four');
var five = document.querySelector('#five');
var six = document.querySelector('#six');
var multiply = document.querySelector('#multiply');
var one = document.querySelector('#one');
var two = document.querySelector('#two');
var three = document.querySelector('#three');
var subtract = document.querySelector('#subtract');
var zero = document.querySelector('#zero');
var decimal = document.querySelector('#decimal');
var equal = document.querySelector('#equal');
var plus = document.querySelector('#plus');

//Variable Declarations
var inputText, calculate;

//Function for clear
function inputClear() {
	inputText = null;
	answer.textContent = null;
};

//Functions for operations
function inputDivide() {
	inputText = divide.value;
	answer.textContent = answer.textContent + inputText;
};

function inputMultiply() {
	inputText = multiply.value;
	answer.textContent = answer.textContent + inputText;
};

function inputSubtract() {
	inputText = subtract.value;
	answer.textContent = answer.textContent + inputText;
};

function inputPlus() {
	inputText = plus.value;
	answer.textContent = answer.textContent + inputText;
};

// function inputDecimal() {
// 	iputText = decimal.value;
// 	answer.textContent = answer.textContent + inputText;
// }; THIS DOESN'T WORK YET

function inputEqual() {
	calculate = inputText;
	answer.textContent = calculate;
	console.log(inputEqual);
};

//Functions for number inputs
function input1() {
	inputText = one.value;
	answer.textContent = answer.textContent + inputText;
};

function input2() {
	inputText = two.value;
	answer.textContent = answer.textContent + inputText;
};

function input3() {
	inputText = three.value;
	answer.textContent = answer.textContent + inputText;
};

function input4() {
	inputText = four.value;
	answer.textContent = answer.textContent + inputText;
};

function input5() {
	inputText = five.value;
	answer.textContent = answer.textContent + inputText;
};

function input6() {
	inputText = six.value;
	answer.textContent = answer.textContent + inputText;
};

function input7() {
	inputText = seven.value;
	answer.textContent = answer.textContent + inputText;
};

function input8() {
	inputText = eight.value;
	answer.textContent = answer.textContent + inputText;
};

function input9() {
	inputText = nine.value;
	answer.textContent = answer.textContent + inputText;
};

function input0() {
	inputText = zero.value;
	answer.textContent = answer.textContent + inputText;
};

//Button Click for clear
clear.addEventListener('click', inputClear);

//Button Click for operations
divide.addEventListener('click', inputDivide);
multiply.addEventListener('click', inputMultiply);
subtract.addEventListener('click', inputSubtract);
plus.addEventListener('click', inputPlus);
// decimal.addEventListener('click', inputDecimal); THIS DOESN'T WORK YET
equal.addEventListener('click', inputEqual);

//Button Click for number inputs
one.addEventListener('click', input1);
two.addEventListener('click', input2);
three.addEventListener('click', input3);
four.addEventListener('click', input4);
five.addEventListener('click', input5);
six.addEventListener('click', input6);
seven.addEventListener('click', input7);
eight.addEventListener('click', input8);
nine.addEventListener('click', input9);
zero.addEventListener('click', input0);

