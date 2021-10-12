


const skaiciuoti2 = document.querySelector(".skaiciuoti2");
const kiekis2 = document.querySelector(".kiekis2");
const kiekis22 = document.querySelector(".kiekis22");
const x2 = document.querySelector(".x");


function skaiciuoti2Click() {
    if (kiekis2.value == '' || kiekis22.value == '') {
        alert("Norint apskaičiuoti kiekį \"X\", visi puslapio laukeliai privalo būti užpildyti")
    } else {
        x2.innerText = parseInt(kiekis2.value) * parseInt(kiekis22.value) / 100;
    }
}



skaiciuoti2.addEventListener('click', skaiciuoti2Click);