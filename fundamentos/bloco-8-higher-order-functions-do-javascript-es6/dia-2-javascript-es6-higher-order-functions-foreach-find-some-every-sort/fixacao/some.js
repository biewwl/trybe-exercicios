const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
  return `${arr.some((nome) => nome === name)}, ou seja, o nome ${name}, está contido no array: ${arr}`;
}

console.log(hasName(names, 'Ana'));