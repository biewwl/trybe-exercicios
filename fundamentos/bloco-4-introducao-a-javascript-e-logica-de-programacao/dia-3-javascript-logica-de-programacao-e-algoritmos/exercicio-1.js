// Exercício de fatorar

let fator = 10;
let fatorado = fator;
for (let id = 1; id < fator; id += 1) {
    fatorado *= id
};
console.log(fatorado)

// Exercício de inverter palavra

let word = 'tryber';
let letras = [];
let resultado;
for (let i = word.length -1; i >= 0; i -= 1) {
    letras.push(word[i]);
};
resultado = letras.join('');

console.log(resultado)

// Descobrir qual a maior string em um array e a menor

let array = ['java', 'javascript', 'python', 'html', 'css'];
let maiorString = array[0];
let menorString = array[0];
for (let i = 0; i < array.length; i += 1) {
if(array[i].length >= maiorString.length) {
    maiorString = array[i]
}
if(array[i].length <= menorString.length) {
    menorString = array[i]
}
}

console.log(maiorString, menorString)

// Descobrir maior número primo entre 0 e 50


let limite = 50
let numeros = []

for (let numero = 2; numero <= limite; numero += 1) {
    let primo = true;

    for (let divisor = 2; divisor < numero; divisor += 1) {
        if (numero % divisor === 0) {
            primo = false;
        }
    }
    if (primo) numeros.push(numero);
}

console.log(numeros);