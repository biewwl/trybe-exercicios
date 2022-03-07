const myFizzBuzz = require('./myFizzBuzz.js');

describe('A função myFizzBuzz(num) recebe um número num e retorna "fizzbuzz" se o número for divisível por 3 e 5 , retorna "fizz" se for divisível apenas por 3 , retorna "buzz" se divisível apenas por 5 , retorna o próprio número caso não seja divisível por 3 ou 5 e retorna false caso num não seja um número', () => {
  it('Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado', () => {
    expect('fizzbuzz').toEqual(myFizzBuzz(15));
  })
  it('Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado', () => {
    expect('fizz').toEqual(myFizzBuzz(3));
  })
  it('Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado', () => {
    expect('buzz').toEqual(myFizzBuzz(5));
  })
  it('Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado', () => {
    expect(2).toEqual(myFizzBuzz(2));
  })
  it('Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado', () => {
    expect(false).toEqual(myFizzBuzz('2'));
  })
})