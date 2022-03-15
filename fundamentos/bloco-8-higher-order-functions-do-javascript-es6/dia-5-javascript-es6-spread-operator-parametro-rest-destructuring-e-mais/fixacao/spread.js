// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Cereja', 'Laranja', 'Maçã'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Caju', 'Amora', 'Abacaxi'];

const fruitSalad = (fruit, additional) => {
  return [...fruit, ...additional]
};

console.log(fruitSalad(specialFruit, additionalItens));