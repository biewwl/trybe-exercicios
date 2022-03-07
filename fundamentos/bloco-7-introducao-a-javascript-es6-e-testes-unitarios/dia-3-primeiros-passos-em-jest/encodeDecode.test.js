const { encode, decode } = require('./encodeDecode.js');

describe('Testar se encode e decode são funções', () => {
  it('Encode é uma função', () => {
    expect('function').toBe(typeof(encode));
  })
  it('decode é uma função', () => {
    expect('function').toBe(typeof(decode));
  })
  it('Testar se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente pela função encode', () => {
    expect('12345').toBe(encode('aeiou'));
  })
  it('Testar se os números 1, 2, 3, 4, 5 são convertidas em a, e, i, o e u, respectivamente pela função decode', () => {
    expect('aeiou').toBe(decode('12345'));
  })
  it('Testar se as demais letras/números não são convertidos para encode', () => {
    expect('bcdfghjklmnpqrstvwxyz').toBe(encode('bcdfghjklmnpqrstvwxyz'))
  })
  it('Testar se as demais letras/números não são convertidos para decode', () => {
    expect('bcdfghjklmnpqrstvwxyz').toBe(decode('bcdfghjklmnpqrstvwxyz'))
  })
  it('Teste se a string que é retornada pela função encode tem o mesmo número de caracteres que a string passada como parâmetro.', () => {
    const testes = 'testePalavra';
    expect(encode(testes).length).toBe(testes.length);
  })
  it('Teste se a string que é retornada pela função decode tem o mesmo número de caracteres que a string passada como parâmetro.', () => {
    const testes = 'testePalavra';
    expect(decode(testes).length).toBe(testes.length);
  })
})
