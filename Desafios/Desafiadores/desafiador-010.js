/*

10 - Nega Números

Escreva uma algoritmo que recebe um array de números, retorne uma cópia do array com todos os números negados.

Por exemplo:
--------------
Entrada:
[2 ,-3 ,4 ]

Saída:
[-2, 3 ,-4 ]
--------------

*/

function negateNumbers(numbers) {
  const revertNumber = [];
  for (let i = 0; i < numbers.length; i++) {
      revertNumber.push(numbers[i] * -1);
  }
  return revertNumber;
}

module.exports = negateNumbers;
