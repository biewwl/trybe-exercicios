// 1 - Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body.

let body = document.querySelector('body');

let titulo = document.createElement('h1');
titulo.innerText = 'Exercício 5.2 - JavaScript DOM';
titulo.id = 'titulo';

body.appendChild(titulo);

// 2 - Adicione a tag main com a classe main-content como filho da tag body ;

let main = document.createElement('main');
main.classList = 'main-content';
main.id = 'main';

body.appendChild(main);

// 3 - Adicione a tag section com a classe center-content como filho da tag main criada no passo 2.

let centerContent = document.createElement('session');
centerContent.classList = 'center-content';
centerContent.id = 'centerContent';

main.appendChild(centerContent);

// 4 - Adicione a tag p como filho do section criado no passo 3 e coloque algum texto.

let firstParagrafo = document.createElement('p');
firstParagrafo.id = 'firstParagrafo';
firstParagrafo.innerText = 'Esse é um parágrafo localizado na session centerContent';

centerContent.appendChild(firstParagrafo);

// 5 - Adicione a tag section com a classe left-content como filho da tag main criada no passo 2.

let leftContent = document.createElement('session');
leftContent.className = 'left-content';
leftContent.id = 'leftContent';

main.appendChild(leftContent);

//  6 - Adicione a tag section com a classe right-content como filho da tag main criada no passo 2.

let rightContent = document.createElement('session');
rightContent.className = 'right-content';
rightContent.id = 'rightContent';

main.appendChild(rightContent);

// 7 - Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image. Esse elemento deve ser filho do section criado no passo 5.

let image = document.createElement('img');
image.src = 'https://picsum.photos/200';
image.className = 'small-image';
image.id = 'image';

leftContent.appendChild(image);

// 8 - Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um , dois , três , ... como valores da lista. Essa lista deve ser filha do section criado no passo 6.

let lista = document.createElement('ul');
lista.id = 'lista';

rightContent.appendChild(lista);

for (let ix = 0; ix < 10; ix += 1) {
    let list = document.createElement('li');
    lista.appendChild(list)
};


let um = lista.firstChild;
um.id = 'um';
um.innerText = 'um';
let dois = lista.firstChild.nextSibling;
dois.id = 'dois';
dois.innerText = 'dois';
let tres = lista.firstChild.nextSibling.nextSibling;
tres.id = 'tres';
tres.innerText = 'tres';
let quatro = lista.firstChild.nextSibling.nextSibling.nextSibling;
quatro.id = 'quatro';
quatro.innerText = 'quatro';
let cinco = lista.firstChild.nextSibling.nextSibling.nextSibling.nextSibling;
cinco.id = 'cinco';
cinco.innerText = 'cinco';
let seis = lista.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling;
seis.id = 'seis';
seis.innerText = 'seis';
let sete = lista.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling;
sete.id = 'sete';
sete.innerText = 'sete';
let oito = lista.lastChild.previousSibling.previousSibling;
oito.id = 'oito';
oito.innerText = 'oito';
let nove = lista.lastChild.previousSibling;
nove.id = 'nove';
nove.innerText = 'nove';
let dez = lista.lastChild;
dez.id = 'dez';
dez.innerText = 'dez';

// 9 - Adicione 3 tags h3 , todas sendo filhas do main criado no passo 2.

for (let iq = 0; iq < 3; iq += 1) {
    let h3 = document.createElement('h3');
    main.appendChild(h3);
};

// ///////////////////////
// Agora que você criou muita coisa, vamos fazer algumas alterações e remoções:
// ///////////////////////

// 1 - Adicione a classe title na tag h1 criada;

titulo.className = 'title';

// 2 - Adicione a classe description nas 3 tags h3 criadas.

let descriptions = document.querySelectorAll('h3');

for (iu in descriptions) {
    let info = document.querySelectorAll('h3')[iu];
    info.className = 'description';
};

// 3 - Remova a section criado no passo 5 (aquele que possui a classe left-content ). Utilize a função .removeChild().

main.removeChild(leftContent);

// 4 - Centralize a section criado no passo 6 (aquele que possui a classe right-content ). Dica: para centralizar, basta configurar o margin-right: auto da section.

rightContent.style.display = 'block';
rightContent.style.marginRight = 'auto';

// 5 - Troque a cor de fundo do elemento pai da section criada no passo 3 (aquela que possui a classe center-content ) para a cor verde;

main.style.backgroundColor = 'green';

// 6 - Remova os dois últimos elementos ( nove e dez ) da lista criada no passo 8.

lista.removeChild(nove);
lista.removeChild(dez);