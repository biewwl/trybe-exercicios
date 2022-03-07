function techList(wantLearn, name) {
  let resultado = [];
  if (wantLearn.length === 0) {
    return 'Vazio!'
  }
  for (keys in wantLearn) {
    resultado[keys] = {tech: wantLearn[keys]}
    resultado[keys].name = name;
  }
  return resultado.sort(function(a,b) {
    return a.tech < b.tech ? -1 : a.tech > b.tech ? 1 : 0;
  })
}

module.exports = techList;