function operate(operator,num1,num2){

};


//buttons
const btnAll = document.querySelectorAll('.digit-box');
const btnOne = document.querySelector('#btn-1');
const btnTwo = document.querySelector('#btn-2');
const btnThree = document.querySelector('#btn-3');
const btnFour = document.querySelector('#btn-4');
const btnFive = document.querySelector('#btn-5');
const btnSix = document.querySelector('#btn-6');
const btnSeven = document.querySelector('#btn-7');
const btnEight = document.querySelector('#btn-8');
const btnNine = document.querySelector('#btn-9');
const btnZero = document.querySelector('#btn-0');

//operators
const btnPlus = document.querySelector('#btn-plus');
const btnMinus = document.querySelector('#btn-minus');
const btnMult = document.querySelector('#btn-mult');
const btnDiv = document.querySelector('#btn-div');
const btnEq = document.querySelector('#btn-equal');
const btnClr = document.querySelector('#btn-clear');

//display
const displayGet = document.querySelector('#display');
let displayValue = '';

function updateDisplay(){
    displayGet.textContent = displayValue;
}   
//event listeners for buttons
btnOne.addEventListener('click' , () => {
    displayValue+=1;
    console.log(displayValue);
    updateDisplay();
});

btnTwo.addEventListener('click' , () => {
    displayValue+=2;
    console.log(displayValue);
    updateDisplay();
});

btnThree.addEventListener('click' , () => {
    displayValue+=3;
    console.log(displayValue);
    updateDisplay();
});

btnFour.addEventListener('click' , () => {
    displayValue+=4;
    console.log(displayValue);
    updateDisplay();
});

btnFive.addEventListener('click' , () => {
    displayValue+=5;
    console.log(displayValue);
    updateDisplay();
});

btnSix.addEventListener('click' , () => {
    displayValue+=6;
    console.log(displayValue);
    updateDisplay();
});

btnSeven.addEventListener('click' , () => {
    displayValue+=7;
    console.log(displayValue);
    updateDisplay();
});

btnEight.addEventListener('click' , () => {
    displayValue+=8;
    console.log(displayValue);
    updateDisplay();
});

btnNine.addEventListener('click' , () => {
    displayValue+=9;
    console.log(displayValue);
    updateDisplay();
});

btnZero.addEventListener('click' , () => {
    displayValue+=0;
    console.log(displayValue);
    updateDisplay();
});







