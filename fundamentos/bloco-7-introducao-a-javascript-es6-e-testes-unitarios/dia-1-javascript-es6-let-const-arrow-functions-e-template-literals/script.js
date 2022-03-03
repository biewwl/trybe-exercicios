// Exercício 1

const testingScope = escopo => (escopo === true) ? console.log(`Não devo ser utilizada fora do meu escopo (if) ótimo, fui utilizada no escopo !`) : console.log(`Não devo ser utilizada fora meu escopo`);

testingScope(true);

// Exercício 2

const ordenado = oddsAndEvens => `Os números ${oddsAndEvens.sort((a, b) => a - b)} se encontram ordenados de forma crescente!`;

// Seu código aqui.

console.log(ordenado([13, 3, 4, 10, 7, 2])); // será necessário alterar essa linha 😉

/////////////
// Parte 2
/////////////

//Exercício 1 
// const fatorial = (n) => {
//   let resultado = n;
//   for (let id = 1; id < n; id += 1) {
//     resultado *= n - id;
//   }
//   if (resultado === 0) {
//     return 1
//   }
//   return resultado;
// }
//

const fatorial = n => n <= 1 ? 1 : n * fatorial(n - 1);
console.log(fatorial(7));


// Exercício 2

const maior = frase => {
  const frase2 = frase.split(' ');
  let maiorPalavra = frase2[0];
  for (key in frase2) {
    if (frase2[key].length > maior.length) {
      maiorPalavra = frase2[key];
    }
  }
  return maiorPalavra;
}

console.log(maior('João Gabriel Dias Fernandes'));

// Exercício 3

const count = document.querySelector('#count');
const btn = document.querySelector('#btn');
let clickCount = 0;

btn.addEventListener('click', ()=> {
  clickCount += 1;
  count.innerText = clickCount;
})

// Exercício 4

const string = 'Tryber x aqui!';
const retornar = nome => string.replace(/x/g, nome);

// Exercício 5

const stringRetornada = retornar('Gabriel');

const skills = ['JavaScript', 'CSS', 'HTML', 'Git', 'GitHub'];

const naoSei = (retorno) => `${retorno} Minhas cinco principais habilidades são: ${skills.sort()}`;

console.log(naoSei(stringRetornada))