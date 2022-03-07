function encode(string) {
  let newWord = string.replace(/a/g, 1);
  newWord = newWord.replace(/e/g, 2);
  newWord = newWord.replace(/i/g, 3);
  newWord = newWord.replace(/o/g, 4);
  newWord = newWord.replace(/u/g, 5);
  return newWord;
}

function decode(encode) {
  let finalWord = encode.replace(/1/g, 'a');
  finalWord = finalWord.replace(/2/g, 'e');
  finalWord = finalWord.replace(/3/g, 'i');
  finalWord = finalWord.replace(/4/g, 'o');
  finalWord = finalWord.replace(/5/g, 'u');
  return finalWord;
}

const functions = { encode, decode };

module.exports = functions;