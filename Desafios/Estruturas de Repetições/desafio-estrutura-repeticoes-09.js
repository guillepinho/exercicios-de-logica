/*

09 - Incluído nos arrays

Escreva um algoritmo que irá receber dois array a e b, retorne um novo array com os elementos que se repetem em a e b, se não houver elemento repetidos, retorne um array vazio.

Por exemplo:
--------------------------------------------------------------------------------
Entradas:
a = [1, 2, 3 ], b = [4, 2, 4 ]

Saída:
[2]
--------------------------------------------------------------------------------

Obs: Não utilize o includes, você deve encontrar os valores utilizando 2 for's.

*/

function includesArrays(a, b) {
  const newArray = [];
  for (let indexa = 0; indexa < a.length; indexa++) {
    for (let indexb = 0; indexb < b.length; indexb++) {
      if (a[indexa] == b[indexb]) {
        newArray.push(a[indexa]);
      }
    }
  }
  return newArray;
}

module.exports = includesArrays;
