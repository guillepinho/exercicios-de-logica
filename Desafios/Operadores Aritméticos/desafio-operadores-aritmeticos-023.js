/*

23 - Divisões sucessivas

Escreva um algoritmo que leia um número e divida-o por dois sucessivamente até que o seu resultado seja menor que 1.

Retorne a quantidade de vezes que o número foi dividido no formato:
--------------------------
'Quantidade total de divisões: n'
--------------------------

*/

function successiveDivisions(number) {
  let counter = 0;
  for (let i = 0; number >= 1; i++) {
    number = number / 2;
    counter++;
  }
  return `Quantidade total de divisões: ${counter}`;
}

module.exports = successiveDivisions;
