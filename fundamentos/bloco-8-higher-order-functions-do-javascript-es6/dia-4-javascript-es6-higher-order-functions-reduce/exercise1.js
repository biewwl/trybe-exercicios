const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten() {
  return arrays.reduce((iv, cv) => {
    return iv.concat(cv)
  }, []);
};

console.log(flatten());