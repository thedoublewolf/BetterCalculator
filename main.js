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
var inputText;

//Function for number inputs
function input1() {
	inputText = one.value;
	answer.textContent = inputText;
};

function input2() {
	inputText = two.value;
	answer.textContent = inputText;
};

function input3() {
	inputText = three.value;
	answer.textContent = inputText;
};

function input4() {
	inputText = four.value;
	answer.textContent = inputText;
};

function input5() {
	inputText = five.value;
	answer.textContent = inputText;
};

function input6() {
	inputText = six.value;
	answer.textContent = inputText;
};

function input7() {
	inputText = seven.value;
	answer.textContent = inputText;
};

function input8() {
	inputText = eight.value;
	answer.textContent = inputText;
};

function input9() {
	inputText = nine.value;
	answer.textContent = inputText;
};

function input0() {
	inputText = zero.value;
	answer.textContent = inputText;
};

//Button Click
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

