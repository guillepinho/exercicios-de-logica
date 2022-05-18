/*

14 - Soma de números primos

Escreva um algoritmo que some números primos de 0 à 150 e retorne o resultado.

*/

function sumPrimesNumbers() {
  const primes = [2];
  let primesResult = Number();
  let counter = 0;
  for (let i = 3; i <= 150; i++) {
    counter = 0;
    for (let d = 0; d <= i; d++) {
      if (i % d == 0) {
        counter++;
      }
    }
    if (counter == 2) {
      primes.push(i);
    }
  }
  for (let k = 0; k < primes.length; k++) {
    primesResult += primes[k];
  }
  return primesResult;
}

module.exports = sumPrimesNumbers;
