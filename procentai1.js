


const skaiciuoti1 = document.querySelector(".skaiciuoti1");
const kiekis1 = document.querySelector(".kiekis1");
const kiekis11 = document.querySelector(".kiekis11");
const x1 = document.querySelector(".x");


function skaiciuoti1Click() {
    if (kiekis1.value == '' || kiekis11.value == '') {
        alert("Norint apskaičiuoti procentus \"X\", visi puslapio laukeliai privalo būti užpildyti")
    } else {
       x1.innerText = parseInt(kiekis11.value) * 100 / parseInt(kiekis1.value) + "%"; 
    }
}



skaiciuoti1.addEventListener('click', skaiciuoti1Click);