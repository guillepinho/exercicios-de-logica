/*

08 - Conta do restaurante

Escreva um algoritmo que recebe o valor de um prato, calcule e retorne o valor final dele acrescendo 10% de taxa por ser uma área turística e sobre esse resultado, adicione mais 5% de gorjeta para o garçom.

Obs: Retornar um valor do tipo number com uma casa decimal.

*/

function restaurantExpenses(account) {
  return Number(((account * 1.10) * 1.05).toFixed(1));
}

module.exports = restaurantExpenses;
