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
