const screen = document.querySelector(".screen span");
const equalButton = document.querySelector('.equal-sign span');
const signButtons = document.querySelectorAll('.sign span');
const numberButtons = document.querySelectorAll('.number span');
const opButtons = document.querySelectorAll('.op span');
const commaButton = document.querySelector('.comma span');

const commaAdded = false;

signButtons.forEach(el => {
    el.addEventListener('click', function (e) {
        const sign = e.target.innerText;
        if(screen.innerText.length !== 0) {
            screen.innerText += sign;
        }
    }); 
});

numberButtons.forEach(el => {
    el.addEventListener('click', function (e) {
        const number = e.target.innerText;
        if(screen.innerText.length !== 1 || number !== '0')
            screen.innerText += number;
    }); 
});

commaButton.addEventListener('click', function (e) {
    const comma = e.target.innerText;
    if(!screen.innerText.includes(',')) {
        if(screen.innerText.length === 0) {
            screen.innerText += '0,';
        } else {
            screen.innerText += comma;
        }
    }
});

opButtons.forEach(el => {
    el.addEventListener('click', function (e) {
        const op = e.target.innerText;
        if(op === 'C') {
            screen.innerText = '';
            commaAdded = false;
        } else if(op === 'DEL') {
            const screenValue = screen.innerText + '';
            if(screenValue.length !== 0) {
                screen.innerText = screenValue.slice(0, -1);
                if(['/', '+', '*', '%', '-'].some(el => el.includes(screen.innerText))) {
                }
            }
        } else {
            alert('No use case');
        }
    }); 
});




