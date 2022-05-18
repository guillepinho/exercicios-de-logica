/*

08 - Descubra quantas letras tem

Escreva um algoritmo que recebe 2 parâmetros: uma stringing (frase ou palavra) e uma letra.

A função deve retornar quantas letras passadas como 2º parâmetro existem na stringing.

Obs: Trate as vogais com acento como não tendo, por exemplo:
a = á, ã, à.

*/

function countLetters(string, letter) {
  string = string.toLowerCase().normalize('NFD');

  let counter = 0;

  for (let i = 0; i < string.length; i++) {
    if (string[i] == letter) {
      counter++;
    }
  }

  return counter;
}

module.exports = countLetters;
