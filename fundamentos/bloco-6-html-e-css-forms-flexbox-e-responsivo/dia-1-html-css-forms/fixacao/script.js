// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

function naoSelecionar(e){
    e.preventDefault();
}

function letterA(e) {
    if(e.key !== 'a') {
        e.preventDefault()
    }
}

HREF_LINK.addEventListener('click', naoSelecionar)


INPUT_CHECKBOX.addEventListener('click', naoSelecionar)

INPUT_TEXT.addEventListener('keypress', letterA);