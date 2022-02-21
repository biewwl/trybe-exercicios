// Dia 6.2

window.addEventListener('DOMContentLoaded', function()
  {
    let $min = document.querySelector('.real [name="realDPX-min"]');

    $min.DatePickerX.init({
      mondayFirst: true,
      minDate    : new Date(),
    });
  });

// 

const  validate  =  new  window . JustValidate ( '#form' ) ;
const validation = new JustValidate('#form');

validation
  .addField('#name', [
    {
      rule: 'minLength',
      value: 10,
    },
    {
      rule: 'maxLength',
      value: 40,
    },
    {
      rule: 'required',
      errorMessage: 'Nome é Obrigatório!',
    },
  ])

  .addField('#email', [
    {
      rule: 'minLength',
      value: 10,
    },
    {
      rule: 'maxLength',
      value: 50,
    },
    {
      rule: 'required',
      errorMessage: 'Email é Obrigatório!',
    },
    {
      rule: 'email',
      errorMessage: 'Este email é Inválido',
    },
  ])

  .addField('#usage-image', [
    {
      rule: 'required',
      errorMessage: 'Para participar você deve marcar essa opção!',
    },
  ])

  .addField('#date', [
    {
      rule: 'required',
      errorMessage: 'Escolha uma data para sua viagem!',
    },
  ])

    .onSuccess((event) => {
    alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.', event);
  })

    .onFail((event) => {
    alert('Dados Inválidos', event);
  });