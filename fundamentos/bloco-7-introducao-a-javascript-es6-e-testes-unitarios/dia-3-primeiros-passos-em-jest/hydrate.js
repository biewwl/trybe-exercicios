function hydrate(string) {
  let bebidas = [];
  let resultado = 0;
  for(caracteres in string) {
    if (string[caracteres] > 0) {
      bebidas.push(string[caracteres])
    }
  }
  for (numb in bebidas) {
    bebidas[numb] = +bebidas[numb]
  }
  for (id in bebidas) {
    resultado += bebidas[id];
  }

  if (resultado === 1) {
    return "1 copo de água"
  } else if (resultado > 1) {
    return resultado + " copos de água"
  }

  return resultado
}

module.exports = hydrate;