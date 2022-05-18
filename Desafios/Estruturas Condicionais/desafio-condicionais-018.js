/*

18 - Jogo de cartas

Mara e Sara estão jogando um novo jogo de cartas chamado Xablau.
O jogo utiliza um baralho normal que possui Ás, Dama, Valete e Reis.

Para jogar Xablau é necessário ter duas pessoas participantes, que devem receber 2 cartas cada.

Ganha o jogo quem tiver a maior pontuação, e caso a pontuação das pessoas seja igual o jogo empata.

A pontuação do Xablau é feita da seguinte forma:
* Se as cartas forem iguais, a pessoa jogadora recebe a soma das duas cartas multiplicada por 2;
*  Se as cartas forem sequencias, por exemplo 1 e 2 ou 10 e 11, a pessoa jogadora recebe a soma das duas cartas multiplicada por 3;
* Caso não satisfaça nenhum das duas condições anteriores, a pessoa jogadora recebe somente a soma das duas cartas.

Para a pontuação vamos considerar apenas números inteiros de 1 a 13.

Escreva um algoritmo que retorne quando houver empate no jogo ou quem foi a pessoa vencedora do Xablau e qual foi sua pontuação baseando-se nas informações dadas anteriormente.

Possíveis retornos:
--------------------------
"Mara venceu com x pontos"
--------------------------
"Sara venceu com x pontos"
--------------------------
"O jogo empatou"
----------------

Os seus retornos devem seguir o mesmo padrão dos exemplos acima.

*/

function cardsGame(maraCard1, maraCard2, saraCard1, saraCard2) {
  const difMara = Math.abs(maraCard1 - maraCard2);
  const difSara = Math.abs(saraCard1 - saraCard2);
  let maraPoints = 0;
  let saraPoints = 0;
  if (difMara == 0) {
    maraPoints = (maraCard1 + maraCard2) * 2;
  }
  else if (difMara == 1) {
    maraPoints = (maraCard1 + maraCard2) * 3;
  }
  else {
    maraPoints = maraCard1 + maraCard2;
  }
  if (difSara == 0) {
    saraPoints = (saraCard1 + saraCard2) * 2;
  }
  else if (difSara == 1) {
    saraPoints = (saraCard1 + saraCard2) * 3;
  }
  else {
    saraPoints = saraCard1 + saraCard2;
  }
  if (maraPoints > saraPoints) {
    return `Mara venceu com ${maraPoints} pontos`;
  }
  else if (maraPoints == saraPoints) {
    return 'O jogo empatou';
  }
  else {
    return `Sara venceu com ${saraPoints} pontos`;
  }
}

module.exports = cardsGame;
