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