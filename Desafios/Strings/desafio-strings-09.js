/*

09 - Brincando de espionagem

Joana e Jonas estão brincando de espionagem e querem trocar mensagens codificadas.

Escreva um algoritmo que recebe uma string troque as vogais no seguinte padrão e a retorne:
a - 5
e - b
i - 9
o - p
u - 1

*/

function encodeMessage(string) {
  string = string.replace(/[a]/g, '5');
  string = string.replace(/[e]/g, 'b');
  string = string.replace(/[i]/g, '9');
  string = string.replace(/[o]/g, 'p');
  string = string.replace(/[u]/g, '1');
  return string;
}

module.exports = encodeMessage;
