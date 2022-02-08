// 1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

function verificaPalindrome(word) {
    let wordInString = [];
    let palindrome;
    for (let id = word.length - 1; id >= 0; id -= 1) {
        wordInString.push(word[id])
    }

    let invertido = wordInString.join('');

    // console.log(invertido);

    if(invertido === word) {
        // console.log(word + ' é um palindrome.')
        palindrome = true;
    } else {
        // console.log(word + ' não é um palindrome.')
        palindrome = false;
    }
    return palindrome;
}

console.log(verificaPalindrome('arara'));

// 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

function maiorValorInteiro(arrayDeNumerosInteiros) {
    let maiorId = 0;
    for (numeros in arrayDeNumerosInteiros) {
        if (arrayDeNumerosInteiros[maiorId] < arrayDeNumerosInteiros[numeros]) {
            maiorId = numeros
        }
    }
    return maiorId;
}
console.log(maiorValorInteiro([2, 3, 6, 7, 10, 1]));

// 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

function maiorValorInteiro(arrayDeNumerosInteiros) {
    let maiorId = 0;
    let maiorNumero = 0;
    let menorId = 0;
    let menorNumero = 0;
    for (numeros in arrayDeNumerosInteiros) {
        if (arrayDeNumerosInteiros[maiorId] < arrayDeNumerosInteiros[numeros]) {
            maiorId = numeros;
            maiorNumero = arrayDeNumerosInteiros[numeros];
        }
        if (arrayDeNumerosInteiros[numeros] < arrayDeNumerosInteiros[menorId]) {
            menorId = numeros;
        }
    }
    // return maiorId + ' ' + maiorNumero;
    
    return menorId;
    
}
console.log(maiorValorInteiro([2, 4, 6, 7, 10, 0, -3]));

// 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

function maiorPalavra(arrayDePalavras) {
    let biggerWord = ''
    for (words in arrayDePalavras) {
        if (biggerWord.length < arrayDePalavras[words].length) {
            biggerWord = arrayDePalavras[words]
        }
    }
    return biggerWord;
}

console.log(maiorPalavra(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

// 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

function maisVezesRepetido(num) {
    let contador = 0;
    let contadorMaior = 0;
    let maisRepetido = 0;

    for (let i = 0; i < num.length; i += 1) {
    contador = 0;
        for (let id = 0; id < num.length; id += 1) {
            if (num[i] === num[id]) {
                contador += 1;
            }
        }
        if (contador > contadorMaior) {
        contadorMaior = contador;
        maisRepetido = num[i]
        }
    }
    return maisRepetido
}


console.log(maisVezesRepetido([2, 3, 2, 5, 8, 2, 3]));

// 6 - Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.

function somarAteNumero(numero) {
    let resultado = 0;
    for (let id = 0; id <= numero; id += 1) {
        resultado += id;
    }
    return resultado;
}

console.log(somarAteNumero(5))

// 7 - Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word .

function verificaFimPalavra(palavra, fim) {
    let final = false;
    let palavraInvertida = [];
    let fimInvertido = [];
    let reverseWord;
    let reverseEnd;
    
    for (let id = palavra.length - 1; id >= 0; id -= 1) {
        palavraInvertida.push(palavra[id])
        reverseWord = palavraInvertida.join('')
    }
    for (let ix = fim.length - 1; ix >= 0; ix -= 1)  {
        fimInvertido.push(fim[ix])
        reverseEnd = fimInvertido.join('')
    }
    let ultimaV = true;
    for (let op = 0; op < reverseEnd.length; op += 1) {
        for (let num = 0; num < reverseEnd.length; num += 1) {
            if (reverseEnd[num] === reverseWord[num] && ultimaV === true) {
                final = true
            } else {
                ultimaV = false
            }
        }
    }

    return ultimaV;
}

console.log(verificaFimPalavra('trybe', 'be'));
console.log(verificaFimPalavra('joaofernando', 'fernan'))