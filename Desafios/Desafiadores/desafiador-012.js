/*

12 - Fatorial

Escreva um algoritmo que recebe um número n e calcule e retorne o seu fatorial.

*/

function factorial(n) {
  let fact = n;
  for (let i = n - 1; i > 0; i--) {
    fact = fact * i;
  }
  return fact;
}

module.exports = factorial;
