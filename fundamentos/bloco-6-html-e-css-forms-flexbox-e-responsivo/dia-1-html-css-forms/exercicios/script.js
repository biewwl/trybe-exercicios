let botao = document.querySelector('#send');

function stop(e){
  e.preventDefault();
}

botao.addEventListener('click', stop);

// 

botao.addEventListener('click', verificaTamanho);

function verificaTamanho() {
  let tamanho1 = document.querySelector('#name').value.length;
  let tamanho2 = document.querySelector('#email').value.length;
  let data = document.querySelector('input[type="date"]');
  let fotosOk = document.querySelector('#usage-image');

  if(tamanho1 < 10 || tamanho2 < 10 || data.value === '' || fotosOk.checked !== true) {
    alert('Dados Inválidos')
  } else if(tamanho1 >= 10 && tamanho2 >= 10 && data.value !== '' && fotosOk.checked) {
    alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.')
  }
}
