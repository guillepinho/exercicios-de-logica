/*

10 - Fahrenheit

Escreva um algoritmo que faça conversão de temperatura em graus Fahrenheit para graus Celsius e retorne
  a temperatura em celsius.

*/

function fahrenheitToCelsius(fahrenheit) {
  return Number(((fahrenheit - 32) / 1.8).toFixed(2));
}

module.exports = fahrenheitToCelsius;
