/*

04 - Verifique se todos os dados de uma lista são do mesmo tipo

Escreva uma algoritmo que recebe um array de dados quaisquer e verifique se todos são do mesmo tipo.

Se todos forem retorne:
------
true
------

Caso contrário:
-------
false
-------

Obs: Os retornos tem que ser dados do tipo boolean.

*/

function dataType(types) {
  const typeFirst = typeof types[0];
  for (let i = 0; i < types.length; i++) {
    if (typeFirst != typeof types[i]) {
      return false;
    }
  }
  return true;
}

module.exports = dataType;
