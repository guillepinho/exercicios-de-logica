/*

16 - Imprima a idade em ordem crescente

Escreva um algoritmo que recebe a idade de Marina, Silvia e Iza e retorne uma string com as idades em ordem crescente.

Por exemplo:
-------------
Entrada:
21, 20, 19

Saída:
"19, 20, 21"
-------------

*/

function sortAgeAsc(mariaAge, silviaAge, izaAge) {
  const array = [mariaAge, silviaAge, izaAge];
  const newArray = array.sort(function(a, b) {
    return a - b;
  });
  return newArray.join(', ');
}

module.exports = sortAgeAsc;
