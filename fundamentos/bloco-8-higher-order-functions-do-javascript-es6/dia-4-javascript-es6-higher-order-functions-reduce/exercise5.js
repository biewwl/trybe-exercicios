const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  return names.map((e) => {
    let contador = 0;
    for (key in e) {
      if (e[key] === 'A' || e[key] === 'a') {
        contador += 1;
      }
    }
    return contador;
  }).reduce((iv, cv) => iv + cv);
}

console.log(containsA())