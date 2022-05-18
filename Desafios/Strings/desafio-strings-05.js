/*

05 - Primeira e última letra

Escreva um algoritmo que recebe uma palavra e retorne uma mensagem com a primeira e ultima letra.

Por exemplo:
---------------------------------------------
Entrada:
"Sandy"

Saída:
"A primeira letra é: S, a última letra é: y."
---------------------------------------------

*/

function firstLastLetter(word) {
  const first = word[0];
  const last = word[word.length - 1];
  return `A primeira letra é: ${first} e a última letra é: ${last}.`;
}

module.exports = firstLastLetter;
