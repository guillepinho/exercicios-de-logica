/*

08 - Ordem decrescente

Escreva um algoritmo que retorne uma string com os números inteiros do intervalo de 100 a 200 em ordem decrescente.

Exemplo de saída:
-------------
x, y, z ...n.
-------------

*/

function sortDec() {
  const sort = [];
  for (let i = 200; i >= 100; i--) {
    sort.push(i);
  }
  return sort.join(', ') + '.';
}

module.exports = sortDec;
