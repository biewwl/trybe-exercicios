const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

saudacoes[1](saudacoes[0]); // Olá

// Produza o mesmo resultado acima, porém utilizando array destructuring

const [ texto, imprimir ] = saudacoes;

imprimir(texto);

// 
// 2
// 

let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

[ animal, bebida, comida ] = [comida, animal, bebida]

console.log(comida, animal, bebida); // arroz gato água

// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo

// 
// 3
// 

let numerosPares = [1, 3, 5, 6, 8, 10, 12];

[,,, ...numerosPares] = numerosPares;

console.log(numerosPares); // [6, 8, 10, 12];

// Utilize array destructuring para produzir o resultado esperado pelo console.log abaixo

// Quanto mais vírgulas mais casas são tiradas do começo do array!