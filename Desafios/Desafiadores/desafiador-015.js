/* Não entendi o que é para fazer no 15 */

// 15 - Fatorial e média

/*

Faça uma função que calcule o fatorial de um número recebido por parâmetro e em seguida, utilize-a para fazer a função que calcula a média dos fatoriais de A a B,
sendo A e B números inteiros maiores ou iguais a 0.
A média deve ter até 2 casas decimais de precisão.
*/

function factorial15(number) {
  if (number == 0) {
    return 1;
  }
  let fact = number;
  for (let i = number - 1; i > 0; i--) {
    fact = fact * i;
  }
  return fact;
}

function meanFactorialFromAToB(a, b) {
  let sum = 0;
  for (let n = a; n <= b; n += 1) {
    sum += factorial15(n);
  }
  return parseFloat((sum / (b - a + 1)).toFixed(2));
}

module.exports = {
  factorial15,
  meanFactorialFromAToB,
};
