
let rez = 0;
let random = 0;


const ats = document.querySelector('.ats');
const plius = document.querySelector('.plius');
const minus = document.querySelector('.minus');
const daugyba = document.querySelector('.daugyba');
const dalyba = document.querySelector('.dalyba');
const lygu = document.querySelector('.lygu');

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
    number.innerText = 0;
    console.log("restart veikia");
    rez = 0;
    random = 0;

    setTimeout(function(){
        history.value = "";
    }, 3000);

    history.value = "Buvo nuspaustas \"Restart\" mygtukas"
}


plius.addEventListener('click', pliusClick);
minus.addEventListener('click', minusClick);
reset.addEventListener('click', restartClick);