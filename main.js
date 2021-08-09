


const ats = document.querySelector('.ats');

const plius = document.querySelector('.plius');
const minus = document.querySelector('.minus');
const daugyba = document.querySelector('.daugyba');
const dalyba = document.querySelector('.dalyba');

const lygu = document.querySelector('.lygu');

const restart = document.querySelector('.restart');

const number1 = document.querySelector('.number1');
const number2 = document.querySelector('.number2');




function pliusClick() {
    if (number1.value == '' || number2.value == '') {
        lygu.innerText = "Norint atlikti sudeti, turi irasyti abi \"number\" reiksmes";
    } else {
        ats.innerText = parseInt(number1.value) + parseInt(number2.value);
        lygu.innerText = "Prie " + parseInt(number1.value) + " buvo prideta " + parseInt(number2.value);
    }
}

function minusClick() {
    if (number1.value == '' || number2.value == '') {
        lygu.innerText = "Norint atlikti atimti, turi irasyti abi \"number\" reiksmes";
    } else {
        ats.innerText = parseInt(number1.value) - parseInt(number2.value);
        lygu.innerText = "Is " + parseInt(number1.value) + " buvo atimta " + parseInt(number2.value);
    }
}

function daugybaClick() {
    if (number1.value == '' || number2.value == '') {
        lygu.innerText = "Norint atlikti daugyba, turi irasyti abi \"number\" reiksmes";
    } else {
        ats.innerText = parseInt(number1.value) * parseInt(number2.value);
        lygu.innerText = parseInt(number1.value) + " buvo padauginta is " + parseInt(number2.value);
    }
}

function dalybaClick() {
    if (number1.value == '' || number2.value == '') {
        lygu.innerText = "Norint atlikti dalyba, turi irasyti abi \"number\" reiksmes";
    } else {
        ats.innerText = parseInt(number1.value) / parseInt(number2.value);
        lygu.innerText = parseInt(number1.value) + " buvo padalinta is " + parseInt(number2.value);
    }
}

function lyguClick() {
    lygu.innerText = 'Istorija';
}

function restartClick() {
    number1.value = '';
    number2.value = '';
    ats.innerText = 'Ats.:';
    lygu.innerText = 'Istorija';
}


plius.addEventListener('click', pliusClick);
minus.addEventListener('click', minusClick);
daugyba.addEventListener('click', daugybaClick);
dalyba.addEventListener('click', dalybaClick);

lygu.addEventListener('click', lyguClick);

restart.addEventListener('click', restartClick);