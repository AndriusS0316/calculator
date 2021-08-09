
let rez = 0;
let random = 0;


const ats = document.querySelector('.ats');
const plius = document.querySelector('.plius');
const minus = document.querySelector('.minus');
const daugyba = document.querySelector('.daugyba');
const dalyba = document.querySelector('.dalyba');
const lygu = document.querySelector('.lygu');
const restart = document.querySelector('.restart');

const number1 = document.querySelector('.');
const number2 = document.querySelector('.');

number.innerText = rez;

function pliusClick() {

    rez = (Math.floor(Math.random() * 100) + 1);
    console.log(rez);

    // random = parseInt(random) + rez
    console.log("pliusas veikia");
    
    history.value = "Prie " + parseInt(number.innerText) + " buvo prideta " + rez;
    
    number.innerText = parseInt(number.innerText) + rez;

    
}

function minusClick() {
    
    rez = (Math.floor(Math.random() * 100) + 1);
    console.log(rez);

    // random = parseInt(random) - rez;
    console.log("minusas veikia");

    history.value = "Is " + parseInt(number.innerText) + " buvo atimta " + rez;
    
    number.innerText = parseInt(number.innerText) - rez;
}

function restartClick() {
    
}


plius.addEventListener('click', pliusClick);
minus.addEventListener('click', minusClick);
daugyba.addEventListener('click', daugybaClick);
dalyba.addEventListener('click', dalybaClick);
lygu.addEventListener('click', lyguClick);
restart.addEventListener('click', restartClick);