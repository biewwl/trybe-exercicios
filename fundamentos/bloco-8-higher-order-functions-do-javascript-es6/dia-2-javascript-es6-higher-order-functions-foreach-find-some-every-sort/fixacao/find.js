const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = () => {
  return numbers.find((numero) => {
    return numero % 3 === 0 && numero % 5 === 0;
  })
}

console.log(findDivisibleBy3And5());

// Exercício 2

const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = () => {
  return names.find((nome) => nome.length === 5);
}

console.log(findNameWithFiveLetters());