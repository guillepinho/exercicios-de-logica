/*

01 - Encontre o maior número de um array

Escreva um algoritmo que recebe um array de números inteiros, procure o maior valor e o retorne.

*/

function getMaxNumber(numbers) {
  let number = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > number) {
      number = numbers[i];
    }
  }
  return number;
}

module.exports = getMaxNumber;
