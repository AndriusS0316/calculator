


const ats = document.querySelector('.ats');

const plius = document.querySelector('.plius');
const minus = document.querySelector('.minus');
const daugyba = document.querySelector('.daugyba');
const dalyba = document.querySelector('.dalyba');

const lygu = document.querySelector('.lygu');

const procentai = document.querySelector('.procentai');

const restart = document.querySelector('.restart');

const number1 = document.querySelector('.number1');
const number2 = document.querySelector('.number2');




function pliusClick() {
    if (number1.value == '' || number2.value == '') {
        lygu.innerText = "Norint atlikti sudėtį, turi irašyti abi \"number\" reikšmes";
    } else {
        ats.innerText = parseInt(number1.value) + parseInt(number2.value);
        lygu.innerText = "Prie " + parseInt(number1.value) + " buvo pridėta " + parseInt(number2.value);
    }
}

function minusClick() {
    if (number1.value == '' || number2.value == '') {
        lygu.innerText = "Norint atlikti atimtį, turi įrašyti abi \"number\" reikšmes";
    } else {
        ats.innerText = parseInt(number1.value) - parseInt(number2.value);
        lygu.innerText = "Iš " + parseInt(number1.value) + " buvo atimta " + parseInt(number2.value);
    }
}

function daugybaClick() {
    if (number1.value == '' || number2.value == '') {
        lygu.innerText = "Norint atlikti daugybą, turi įrašyti abi \"number\" reikšmes";
    } else {
        ats.innerText = parseInt(number1.value) * parseInt(number2.value);
        lygu.innerText = parseInt(number1.value) + " buvo padauginta iš " + parseInt(number2.value);
    }
}

function dalybaClick() {
    if (number1.value == '' || number2.value == '') {
        lygu.innerText = "Norint atlikti dalyba, turi įrašyti abi \"number\" reikšmes";
    } else {
        ats.innerText = parseInt(number1.value) / parseInt(number2.value);
        lygu.innerText = parseInt(number1.value) + " buvo padalinta iš " + parseInt(number2.value);
    }
}

function lyguClick() {
    lygu.innerText = 'Istorija';
}

function procentaiClick() {
    src = "./procentai.html";
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

procentai.addEventListener('click', procentaiClick);

restart.addEventListener('click', restartClick);