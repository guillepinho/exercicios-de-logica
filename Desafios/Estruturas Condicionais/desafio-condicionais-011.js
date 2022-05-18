 /*
 
 11 - Triplica vogais

 Escreva um algoritmo que recebe uma string (frase ou palavra) e retorne uma outra string com as vogais "triplicadas".
 
 Por exemplo:
 ------------
 Entrada:
 "Camelo"

 Saída:
 "Caaameeelooo"
 --------------
 
 */

function triVowels(word) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const array = [];
  for (let i = 0; i < word.length; i++) {
    if (vowels.includes(word[i]) === false) {
      array.push(word[i]);
    }
    else if (vowels.includes(word[i]) === true) {
      array.push(word[i]);
      array.push(word[i]);
      array.push(word[i]);
    }
  }
  return array.join('');
}

module.exports = triVowels;
