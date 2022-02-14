function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');
  
  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;
  
    weekDaysList.appendChild(dayListItem);
  };
};
  
createDaysOfTheWeek();
  
// Escreva seu código abaixo.

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

let monthDays = document.querySelector('#days');
 
for (keys in dezDaysList) {
    let create = document.createElement('li');
    create.innerText = dezDaysList[keys];
    create.className = 'day';
    monthDays.appendChild(create);
}

let dia31 = monthDays.lastElementChild;
dia31.className = 'day holiday';

let dia25 = monthDays.children[26];
dia25.className = 'day holiday friday';

let dia24 = monthDays.children[25];
dia24.className = 'day holiday';

let dia4 = monthDays.children[5];
dia4.className = 'friday';

let dia11 = monthDays.children[12];
dia11.className = 'day friday';

let dia18 = monthDays.children[19];
dia18.className = 'day friday';

////////

let fridays = document.querySelectorAll('.friday')
const fridayNumber = [];

for (let key = 0; key < fridays.length; key += 1) {
  fridayNumber.push(fridays[key].innerText)
};

////////

let buttonsContainer = document.querySelector('.buttons-container')

function buttonFeriados(nomeDoBotão) {
  let botaoHoliday = document.createElement('button');
  botaoHoliday.className = 'btn-holiday';
  botaoHoliday.innerText = nomeDoBotão;
  buttonsContainer.appendChild(botaoHoliday);
}

buttonFeriados('Feriados');

let botaoH = document.querySelector('.btn-holiday')

botaoH.addEventListener('click', changeColor);

let feriados = document.querySelectorAll('.holiday');

function changeColor() {
  for (let id = 0; id < feriados.length; id += 1) {
    let feriado = feriados[id];
    
    if(feriado.style.backgroundColor === 'rgb(235, 218, 125)') {
      feriado.style.backgroundColor = '#eee'
    } else {
      feriado.style.backgroundColor = 'rgb(235, 218, 125)'
    }
  }
}

////////

function buttonFriday(nomeDoBotão) {
  let botaoFriday = document.createElement('button');
  botaoFriday.id = 'btn-friday';
  botaoFriday.innerText = nomeDoBotão;
  buttonsContainer.appendChild(botaoFriday);
}

buttonFriday('Sexta-feira');

////////

let buttonF = document.querySelector('#btn-friday');

buttonF.addEventListener('click', changeNameFriday);

// let fridays = document.querySelectorAll('.friday');

function changeNameFriday() {
  for (let id = 0; id < fridays.length; id += 1) {
    let fridayDay = fridays[id];
    fridayDay.style.fontSize = '15px'
    
    if(fridayDay.innerText !== 'Sexta-feira') {
      fridayDay.innerText = 'Sexta-feira'
    } else {
      fridayDay.innerText = fridayNumber[id];
      fridayDay.style.fontSize = '20px'
    }
  }
}

//

function mouseCima(){
  let days = document.querySelector('#days');

  days.addEventListener('mouseover', function(evento) {
    evento.target.style.fontSize = '40px'
  })
}

function mouseFora() {
  let days = document.querySelector('#days');

  days.addEventListener('mouseout', function(evento) {
    evento.target.style.fontSize = '20px'
  })
}

mouseCima();
mouseFora();

// 

let myTasks = document.querySelector('.my-tasks')

function adicionaTarefa(nomeDaTarefa) {
  let tarefa = document.createElement('span');
  tarefa.innerText = nomeDaTarefa;
  myTasks.appendChild(tarefa);
}

adicionaTarefa('Caminhar')

// 

function createLegend(cor) {
  let div = document.createElement('div');
  div.className = 'task';
  div.style.background = cor;
  myTasks.appendChild(div)
}

createLegend('rgb(235, 218, 125)')

//

function clickColor () {
  myTasks.addEventListener('click', function(e){

    if (e.target.className === 'task selected') {
      e.target.className = 'task'
    } else if (e.target.className === 'task') {e.target.className = 'task selected'};
  })
}

clickColor();

// 

let colorTask = myTasks.children[2];
let backgroundColorTask = colorTask.style.backgroundColor;


function mudarCor(){
  function changeColorDay(){
    days.addEventListener('click', function(e){
      if (colorTask.className === 'task selected' && e.target.style.background === backgroundColorTask) {
        e.target.style.background = '#eee';
      } else if (colorTask.className === 'task selected') {
        e.target.style.background = backgroundColorTask
      }
    })
  };
    
  changeColorDay();  

}
mudarCor();

