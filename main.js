let rez = 0;

const ats = document.querySelector('.ats');

const plius = document.querySelector('.plius');
const minus = document.querySelector('.minus');
const daugyba = document.querySelector('.daugyba');
const dalyba = document.querySelector('.dalyba');

//const lygu = document.querySelector('.lygu');

const restart = document.querySelector('.restart');

const number1 = document.querySelector('.number1');
const number2 = document.querySelector('.number2');




function pliusClick() {
    ats.innerText = parseInt(number1.value) + parseInt(number2.value);
}

function minusClick() {
    ats.innerText = parseInt(number1.value) - parseInt(number2.value);
}

function daugybaClick() {
    ats.innerText = parseInt(number1.value) * parseInt(number2.value);
}

function dalybaClick() {
    ats.innerText = parseInt(number1.value) / parseInt(number2.value);
}

function restartClick() {
    number1.value = '';
    number2.value = '';
    ats.innerText = 'Ats.:';
}


plius.addEventListener('click', pliusClick);
minus.addEventListener('click', minusClick);
daugyba.addEventListener('click', daugybaClick);
dalyba.addEventListener('click', dalybaClick);

//lygu.addEventListener('click', lyguClick);

restart.addEventListener('click', restartClick);