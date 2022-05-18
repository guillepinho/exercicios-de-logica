 /*

15 - Pedra, papel e tesoura

Escreva um algoritmo que simula o jogo "pedra, papel e tesoura" levando em consideração que são apenas duas pessoas jogando e retorne o resultado no seguinte formato:
---------------------------------------------
"Player 1 won" ou "A Ties" ou "Player 2 won".
---------------------------------------------

*/

function rockPaperScissors(signPerson1, signPerson2) {
  if (signPerson1 == signPerson2) {
    return 'A Ties';
  }
  if (signPerson1 == 'rock' && signPerson2 == 'scissors') {
    return 'Player 1 won';
  }
  else if (signPerson1 == 'paper' && signPerson2 == 'rock') {
    return 'Player 1 won';
  }
  else if (signPerson1 == 'scissors' && signPerson2 == 'paper') {
    return 'Player 1 won';
  }
  else {
    return 'Player 2 won';
  }
}

module.exports = rockPaperScissors;
