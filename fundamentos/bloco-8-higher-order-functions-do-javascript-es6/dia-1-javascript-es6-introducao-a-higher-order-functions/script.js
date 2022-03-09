const makeEmail = (nomeCompleto) => {
  const nome = nomeCompleto.replace(/ /g, '_').toLowerCase();
  const nameEmail = `${nomeCompleto}, ${nome}@trybe.com`
  return nameEmail;
}

const newEmployees = (func) => {
  const employees = {
    id1: func('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: func('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: func('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

console.log(newEmployees(makeEmail));

// Exercício 2

const sorteio = () => {
  return Math.round(Math.random() * 4 + 1);
}

const message = (numApostado, func) => {
  let resultado = func() === numApostado;
  resultado ? resultado = 'Parabéns você ganhou' : resultado = 'Tente novamente';
  return resultado
}

console.log(message(2, sorteio));

// Exercício 3

const checkPontuation = (gabarito1, studentAnswer1) => {
  if (gabarito1 === studentAnswer1) {
    return 1;
  } else if (studentAnswer1 === 'N.A') {
    return 0;
  } else {
    return -0.5;
  }
}

const hof = (gabarito, studentAnswer, func) => {
  let contador = 0;
  for (let id = 0; id < gabarito.length; id += 1) {
    contador += func(gabarito[id], studentAnswer[id]);
  }
  return `Sua pontuação foi: ${contador}`;
}

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

console.log(hof(RIGHT_ANSWERS, STUDENT_ANSWERS, checkPontuation));

// ///////
// BÔNUS
// ///////

const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dragonDamage = () => {
  return Math.round(Math.random() * (dragon.strength - 15) + 15);
}

const warriorDamage = () => {
  return Math.round(Math.random() * ((warrior.strength * warrior.weaponDmg) - warrior.strength) + warrior.strength);
}

const mana = (qntdMana) => {
  if (qntdMana >= 15) {
    return 15;
  }
  return 0;
}

const dano = (qntdMana) => {
  if (mana(qntdMana) >= 15) {
    return Math.round(Math.random() * ((mage.intelligence * 2) - mage.intelligence) + mage.intelligence);
  }
  return 'Não possui mana suficiente';
}

const danoMana = () => {
  return {
    Dano: dano(mage.mana),
    'Mana Gasta': mana(mage.mana),
  }
}

const gameActions = {
  warriorToDragon: (func) => {
    const damage = func();
    warrior.damage = damage;
    dragon.healthPoints -= damage;
  },
  mageToDragon: (func) => {
    const damage = func().Dano;
    const mana = func()['Mana Gasta'];
    mage.damage = damage;
    dragon.healthPoints -= damage;
    mage.mana -= mana;
  },
  dragonToWarriorAndMage: (func) => {
    const damage = func();
    dragon.damage = damage;
    warrior.healthPoints -= damage;
    mage.healthPoints -= damage;
  },
  warResult: () => {
    const warriorStats = {
      'Vida': warrior.healthPoints,
      'Dano Causado': warrior.damage,
    };
    const mageStats = {
      'Vida': mage.healthPoints,
      'Dano Causado': mage.damage,
      'Mana': mage.mana,
      'Mana usada': 125 - mage.mana,
    };
    const dragonStats = {
      'Vida': dragon.healthPoints,
      'Dano Causado': dragon.damage,
    };
    return {
      Warrior: warriorStats,
      Mago: mageStats,
      Dragon: dragonStats,
    };
  }
}

const result = () => {
  gameActions.warriorToDragon(warriorDamage);
  gameActions.mageToDragon(danoMana);
  gameActions.dragonToWarriorAndMage(dragonDamage);
  return battleMembers;
}

console.log(result());