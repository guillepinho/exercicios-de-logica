/*

13 - Pontos no Xadrez

Você está desenvolvendo o sistema de pontuação de um site de partidas de xadrez.
Ele deve funcionar com base na diferença entre a pontuação das duas pessoas que jogam.

Diferença | Ganhador(a) | Perdedor(a)
  > 200       +10            -10
 <= 200       +20            -20

Escreva um algoritmo que recebe:
* A pontuação das pessoas que jogam (antes da partida): número maior que zero;
* A pessoa vencedora: 1 ou 2.

E retorne uma mensagem com pontuação de cada enxadrista após a partida no seguinte formato:
-----------------------------------------------------
"Enxadrista1: 1500 pontos. Enxadrista2: 1600 pontos."
-----------------------------------------------------

*/

function chessRating(ratingPlayOne, ratingPlayTwo) {
  const dif = Math.abs(ratingPlayOne - ratingPlayTwo);
  if (dif > 200) {
    ratingPlayOne += 10;
    ratingPlayTwo -= 10;
  }
  else {
    ratingPlayOne += 20;
    ratingPlayTwo -= 20;
  }
  return `Enxadrista1: ${ratingPlayOne} pontos. Enxadrista2: ${ratingPlayTwo} pontos.`;
}

module.exports = chessRating;
