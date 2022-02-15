
document.body.style.backgroundColor = localStorage.getItem('background');
document.body.style.color = localStorage.getItem('Cor da Fonte');
document.body.style.fontSize = localStorage.getItem('Tamanho da Fonte');
document.body.style.lineHeight = localStorage.getItem('Espaçamento de linhas');
document.body.style.fontFamily = localStorage.getItem('Fonte')

// Mudar cor de background

function mudarCor(){
    let cor = document.getElementById('color').value;
    let corFundo = document.body.style.backgroundColor = cor;
    localStorage.setItem('background', corFundo)
}

let button = document.getElementById('button');

button.addEventListener('click', mudarCor);

// Mudar cor da fonte

function mudarCorFonte(){
    let cor = document.getElementById('color').value;
    let corFonte = document.body.style.color = cor;
    localStorage.setItem('Cor da Fonte', corFonte)
}

let buttonFonte = document.getElementById('buttonFont');

buttonFonte.addEventListener('click', mudarCorFonte);

// Mudar tamanho da fonte

function mudarAumentarLetra(){
    let letra = document.getElementById('pixel').value;
    let tamanhoFont = document.body.style.fontSize = letra+"px";
    localStorage.setItem('Tamanho da Fonte', tamanhoFont)
}

let textSize = document.getElementById('definir');

textSize.addEventListener('click', mudarAumentarLetra);

// Mudar espaçamento das linhas

function mudarEspacamentoLetra(){
    let letra = document.getElementById('pixel').value;
    let espacamentoLinhas = document.body.style.lineHeight = letra+"px";
    localStorage.setItem('Espaçamento de Linhas', espacamentoLinhas)
}

let textEspacamento = document.getElementById('espaco');

textEspacamento.addEventListener('click', mudarEspacamentoLetra);

// Mudar Fonte

function mudarFont(){
    let fonte = document.getElementById('font').value;
    let fontFamily = document.body.style.fontFamily = fonte;
    localStorage.setItem('Fonte', fontFamily)
}

let font = document.getElementById('fonte');

font.addEventListener('click', mudarFont);