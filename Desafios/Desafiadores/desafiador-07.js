/*

07 - Calcule a média dos graus Celsius em Fahrenheit

Escreva uma algoritmo que recebe uma lista com a média de temperatura em Fahrenheit registradas nos últimos 12 meses e retorne uma mensagem informando a médica em Celsius no formato da saída.

Poor exemplo:
-------------------------------------------------------
Entrada:
[98, 95, 92, 88, 74, 106, 114, 90, 76, 65, 55, 80]

Saída:
"A média anual de temperatura em graus Celsius é 30.05."
--------------------------------------------------------

*/

function averageTemperature(anualRegister) {
  let mediaF = 0;

  for (let i = 0; i < anualRegister.length; i++) {
    mediaF = mediaF + anualRegister[i];

  }

  mediaF = (mediaF / anualRegister.length);
  const mediaC = ((mediaF - 32) / 1.8).toFixed(2);

  return `A média anual de temperatura em graus Celsius é ${mediaC}.`;
}

module.exports = averageTemperature;
