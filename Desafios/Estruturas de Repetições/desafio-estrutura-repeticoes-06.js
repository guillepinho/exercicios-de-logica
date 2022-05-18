/*

06 - Retorne os números ímpares

A Dora aventureira gostaria de ter uma lista com todos o números ímpares entre 1 e 50.

Crie um algoritmo que retorne uma string com todos os números inteiros ímpares desse intervalo.

Use a seguinte estrutura no retorno:
----------------
"x, y, z, ...n."
----------------

*/

function oddNumbers() {
  const arrayOdds = [];
  for (let i = 1; i <= 50; i++) {
    if (i % 2 != 0) {
      arrayOdds.push(i);
    }
  }
  return `${arrayOdds.join(', ')}.`;
}

module.exports = oddNumbers;
