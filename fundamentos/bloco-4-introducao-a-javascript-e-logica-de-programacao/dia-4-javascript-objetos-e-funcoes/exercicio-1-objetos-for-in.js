// Usando o objeto abaixo, faça os exercícios a seguir:

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim'
};

//   1 - Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome. Valor esperado no console: Bem-vinda, Margarida

console.log('Bem-vinda, ' + info.personagem);

// 2 - Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console.

console.log(info);

// 3 - Faça um for/in que mostre todas as chaves do objeto. Valor esperado no console: 

// personagem
// origem
// nota
// recorrente

for (key in info) {
    console.log(key)
}

// 4 - Faça um novo for/in , mas agora mostre todos os valores das chaves do objeto. Valor esperado no console:

// Margarida
// Pato Donald
// Namorada do personagem principal nos quadrinhos do Pato Donald
// Sim

for (value in info) {
    console.log(info[value])
}

// 5 - Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves.

let infoDois = {
    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: 'O último MacPatinhas',
    recorrente: 'Sim'
};

let all = {
    personagens: info.personagem + ' e ' + infoDois.personagem,
    origens: info.origem + ' e ' + infoDois.origem,
    notas: info.nota + ' e ' + infoDois.nota,
    recorrentes: '?'
}

if (info.recorrente === 'Sim' && infoDois.recorrente === 'Sim') {
    all.recorrentes = 'Ambos recorrentes'
} else if (info.recorrente === 'Sim' && infoDois.recorrente === 'Não') {
    all.recorrentes = info.personagem + ' sim e ' + infoDois.personagem + " não."
} else if (info.recorrente === 'Não' && infoDois.recorrente === 'Sim') {
    all.recorrentes = infoDois.personagem + ' sim e ' + info.personagem + " não."
} else if (info.recorrente === 'Não' && infoDois.recorrente === 'Não') {
    all.recorrentes = 'Ambos não recorrentes'
} else {
    all.recorrentes = 'Values ​​are not correct!'
}

console.log(all);

// Usando o objeto abaixo, faça os exercícios a seguir:


let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
      {
        titulo: 'Harry Potter e o Prisioneiro de Azkaban',
        autor: 'JK Rowling',
        editora: 'Rocco',
      }
    ],
  };

// 6 - Acesse as chaves nome , sobrenome e titulo , que está dentro da chave livrosFavoritos , e faça um console.log no seguinte formato: "O livro favorito de Julia Pessoa se chama 'O Pior Dia de Todos'".

console.log('O livro favorito de ' + leitor.nome + ' ' + leitor.sobrenome + ' se chama ' + leitor.livrosFavoritos[0].titulo + '.');

// 7 - Adicione um novo livro favorito na chave livrosFavoritos , que é um array .

// 8 - Acesse as chaves nome e livrosFavoritos e faça um console.log no seguinte formato: "Julia tem 2 livros favoritos".

console.log(leitor.nome + ' tem ' + leitor.livrosFavoritos.length + ' livros favoritos.')