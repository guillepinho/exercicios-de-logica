/*

01 - Inverte nomes

Escreva um algoritmo que recebe uma string com o formato "Nome Sobrenome" e retorne
uma outra string com os nomes invertidos.

Por exemplo:
---------------------
Entrada:
"Xablau Xablauzinho"

Saída:
"Xablauzinho Xablau"
---------------------

*/

function reverseNames(fullName) {
  const nomeSobrenome = fullName.split(' ');
  const reverseN = [];

  for (let i = nomeSobrenome.length; i >= 0; i--) {
    reverseN.push(nomeSobrenome[i]);
  }
  return reverseN.join(' ').trim();
}

module.exports = reverseNames;
