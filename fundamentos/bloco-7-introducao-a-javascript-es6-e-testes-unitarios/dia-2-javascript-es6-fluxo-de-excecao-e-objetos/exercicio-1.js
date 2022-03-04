const numero = () => {
  const value1 = document.getElementById('value1').value;
  const value2 = document.getElementById('value2').value;
  if (value1 === '' || value2 === '') {
    throw new Error('Insira dois números');
  }
  if (isNaN(value1) || isNaN(value2)) {
    throw new Error('Insira apenas números');
  }
  return  parseInt(value1) + parseInt(value2);
}

const paragrafo = document.querySelector('#result');

const sum = () => {
  const value1 = document.getElementById('value1');
  const value2 = document.getElementById('value2');
  try {
    numero();
    paragrafo.innerText = `O resultado é ${numero()}`
  } catch (e) {
    paragrafo.innerText = `Erro : ${e.message}`;
  } finally {
    value1.value = '';
    value2.value = '';
  }
}

window.onload = () => {
  const button = document.getElementById('button');
  button.addEventListener('click', sum);
}