const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};


const modificar = (objeto, chave, valor) => objeto[chave] = valor;
modificar(lesson2, 'turno', 'noite');

const keysObject = (objeto) => Object.keys(objeto);
const tamanhoObjeto = (objeto) => Object.keys(objeto).length;
const valuesObject = (objeto) => Object.values(objeto);

console.log(lesson2);
console.log(keysObject(lesson2));
console.log(tamanhoObjeto(lesson1));
console.log(valuesObject(lesson2));

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });
console.log(allLessons)

const numeroTotal = () => lesson1.numeroEstudantes + lesson2.numeroEstudantes + lesson3.numeroEstudantes;

console.log(numeroTotal());

const getValueByNumber = (objeto, indice) => Object.values(objeto)[indice];
console.log(getValueByNumber(lesson1, 0));

const verifyPair = (objeto, key, value) => {
  let trueFalse = false;
  for (let id = 0; id < Object.keys(objeto).length; id += 1) {
    if (Object.keys(objeto)[id] === key && Object.values(objeto)[id] === value) {
      trueFalse = true;
    }
  }
  return trueFalse;
}

console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));


////
////

const assistiramMatematica = () => {
  let assistiram = Object.values(allLessons.lesson1)[1] + Object.values(allLessons.lesson3)[1];
  return assistiram;
}

console.log(assistiramMatematica());

const relatorio = (professor) => {
  const objeto = {};
  objeto.professor = professor;
  objeto.aulas = [Object.values(allLessons.lesson1)[0], Object.values(allLessons.lesson3)[0]];
  objeto.estudantes = assistiramMatematica();
  return objeto;
}

console.log(relatorio('Maria Clara'));