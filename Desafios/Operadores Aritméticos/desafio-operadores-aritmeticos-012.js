/*

12 - Peso e preço do prato

Um restaurante comprou uma balança nova e precisa adicionar um programa que calcula o valor que a pessoa vai pagar pelo prato de comida.

Escreva um algoritmo que recebe o valor por kilo e o peso do prato e
calcule o valor da refeição, retornando uma mensagem no seguinte formato:

------------------------------------
"O prato de x gramas custa: R$ x,yz"
------------------------------------

Obs: O valor do prato tem que ter duas casas decimais após a virgula.
string = string.replace(/[a]/g, '5');
*/

function weightAndValue(price, gram) {
  const kilo = gram / 1000;
  const msg = `O prato de ${gram} gramas custa: R$ ${Number(price * kilo).toFixed(2)}`;
  return msg.replace(/[.]/g, ',');
}

module.exports = weightAndValue;
