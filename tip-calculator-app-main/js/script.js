'use strict';

/* VARIABLES */
let bill = 0.0;
let people = 0;
let tip = 0.0;

/* ERROR LABELS */
const billErrorLabel = document.querySelector('.bill-input .label-error');
const tipErrorLabel = document.querySelector('.tip-input .label-error');
const peopleErrorLabel = document.querySelector('.people-input .label-error');

/* INPUTS */

//Bill
const billInput = document.querySelector('#bill');

billInput.addEventListener('input', () => {
    let value = parseFloat(billInput.value);
    if((isNaN(value) || value < 0) && billInput.value !== '') {
        billInput.classList.add('error');
        billErrorLabel.innerHTML = `Invalid`;
    } else if(value === 0) {
        billInput.classList.add('error');
        billErrorLabel.innerHTML = `Can't be zero`;
    } else {
        billInput.classList.remove('error');
        billErrorLabel.innerHTML = ``;
    }
    bill = value;
    calculate();
});

billInput.addEventListener('focusout', () => {
    if(billInput.value !== '') {
        billInput.value = isNaN(bill) ? billInput.value : bill;
    }
    calculate();
});

//People
const peopleInput = document.querySelector('#people');

peopleInput.addEventListener('input', () => {
    let value = parseInt(peopleInput.value);
    if((isNaN(value) || value < 0) && peopleInput.value !== '') {
        peopleInput.classList.add('error');
        peopleErrorLabel.innerHTML = `Invalid`;
    } else if(value === 0) {
        peopleInput.classList.add('error');
        peopleErrorLabel.innerHTML = `Can't be zero`;
    } else {
        peopleInput.classList.remove('error');
        peopleErrorLabel.innerHTML = ``;
    }
    
    people = value;
    calculate();
});

peopleInput.addEventListener('focusout', () => {
    if(peopleInput.value !== '') {
        peopleInput.value = isNaN(people) ? peopleInput.value : people;
    }
    calculate();
});

//Tip Radio Buttons
const tipRadioBtns = document.querySelectorAll('input[name="tip"]');
tipRadioBtns.forEach(button => {
    button.addEventListener('click', () => {
        tipCustomInput.value = '';
        tipCustomInput.classList.remove('error');
        tipErrorLabel.innerHTML = ``;
        tip = parseInt(button.value);
        calculate();
    });
});

//Tip Custom Input
const tipCustomInput = document.querySelector('#radio-6');
tipCustomInput.addEventListener('input', () => {
    let value = parseFloat(tipCustomInput.value);
    if((isNaN(value) || value < 0) && tipCustomInput.value !== '') {
        tipCustomInput.classList.add('error');
        tipErrorLabel.innerHTML = `Invalid`;
    } else if(value === 0) {
        tipCustomInput.classList.add('error');
        tipErrorLabel.innerHTML = `Can't be zero`;
    } else {
        tipCustomInput.classList.remove('error');
        tipErrorLabel.innerHTML = ``;
    }
    
    tip = value;
    calculate();
});

tipCustomInput.addEventListener('focusin', () => {
    tip = 0;
    tipRadioBtns.forEach(button => {
        button.checked = false;
    });
});

tipCustomInput.addEventListener('focusout', () => {
    if(tipCustomInput.value !== '') {
        tipCustomInput.value = isNaN(tip) ? tipCustomInput.value : tip;
    }
    calculate();
});

/* OUTPUT */
const tipOutput = document.querySelector('.res-tip');
const totalOutput = document.querySelector('.res-total');

const allValuesValid = () => {
    if(isNaN(bill) || isNaN(tip) || isNaN(people))
        return false;
    
    if(bill <= 0 || tip <= 0 || people <= 0)
        return false;
    
    return true;
}

const calculate = () => {
    if(!allValuesValid()) {
        tipOutput.innerHTML = '0.00';
        totalOutput.innerHTML = '0.00';
        return;
    }

    let totalTip = (tip * bill) / 100;
    tipOutput.innerHTML = (totalTip / people).toFixed(2);
    totalOutput.innerHTML = (bill / people).toFixed(2);
}



/* RESET BUTTON */
const resetBtn = document.querySelector('.reset-button');
resetBtn.addEventListener('click', () => {
    tipOutput.innerHTML = '0.00';
    totalOutput.innerHTML = '0.00';
    billInput.value = '';
    peopleInput.value = '';
    tipCustomInput.value = '';
    tipRadioBtns.forEach(button => {
        button.checked = false;
    });
});