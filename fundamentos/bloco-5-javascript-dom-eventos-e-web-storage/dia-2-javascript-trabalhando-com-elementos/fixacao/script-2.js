// Fixação 2

// Acesse o elemento 'elementoOndeVoceEsta'.

document.querySelector('#elementoOndeVoceEsta');

// Acesse 'pai' a partir de 'elementoOndeVoceEsta' e adicione uma color a ele.

document.querySelector('#elementoOndeVoceEsta').parentElement.style.color = 'blue';

// Acesse o 'primeiroFilhoDoFilho' e adicione um texto a ele.

document.querySelector('#primeiroFilhoDoFilho').innerText = 'Gabriel';

// Acesse o 'primeiroFilho' a partir de pai.

document.querySelector('#pai').firstChild;

// Agora acesse o primeiroFilho a partir de 'elementoOndeVoceEsta'.

document.querySelector('#elementoOndeVoceEsta').previousElementSibling;

// Agora acesse o texto 'Atenção!' a partir de 'elementoOndeVoceEsta'.

document.querySelector('#elementoOndeVoceEsta').nextSibling;

// Agora acesse o 'terceiroFilho' a partir de 'elementoOndeVoceEsta'.

document.querySelector('#elementoOndeVoceEsta').nextElementSibling;

// Agora acesse o 'terceiroFilho' a partir de 'pai'.

document.querySelector('#pai').lastElementChild.previousElementSibling;

// ////////////////////////
// PARTE 2
// ////////////////////////

// Crie um irmão para 'elementoOndeVoceEsta'.

let pai = document.querySelector('#pai');

let texto = document.createElement('p');
texto.innerText = 'Este parágrafo está criado com JavaScript'

pai.appendChild(texto);

// Crie um filho para 'elementoOndeVoceEsta'.

let elementoOndeVoceEsta = document.querySelector('#elementoOndeVoceEsta');

let imagem = document.createElement('img');
imagem.src = './logo-trybe.png'

elementoOndeVoceEsta.appendChild(imagem);

// Crie um filho para 'primeiroFilhoDoFilho'.

let primeiroFilhoDoFilho = document.querySelector('#primeiroFilhoDoFilho');

let link = document.createElement('a');
link.innerText = 'Instagram biewwl';
link.href = 'https://instagram.com/biewwl';
link.target = '_blank';
link.style.display = 'block';
link.id = 'linkInstagram';

primeiroFilhoDoFilho.appendChild(link);

// A partir desse filho criado, acesse 'terceiroFilho' .

document.querySelector('#linkInstagram').parentElement.parentElement.nextElementSibling;

// ////////////////////////
// PARTE 3
// ////////////////////////

// Remova todos os elementos filhos de 'paiDoPai' exceto 'pai' , elementoOndeVoceEsta e 'primeiroFilhoDoFilho'.

let primeiroFilho = document.querySelector('#primeiroFilho');
let terceiroFilho = document.querySelector('#terceiroFilho');
let quartoEUltimoFilho = document.querySelector('#quartoEUltimoFilho');
let segundoEUltimoFilhoDoFilho = document.querySelector('#segundoEUltimoFilhoDoFilho');

let remove = [primeiroFilho, terceiroFilho, quartoEUltimoFilho];

for (key in remove) {
    let elementRemove = remove[key];

    pai.removeChild(elementRemove);
}

elementoOndeVoceEsta.removeChild(segundoEUltimoFilhoDoFilho);