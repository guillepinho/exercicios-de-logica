/*

04 - Dinossauro poliglota

Fernando tem um dinossauro muito esperto.

Quando está com as duas pernas no chão, o dinossauro fala em português.

Quando levanta a perna esquerda, fala em inglês.

Por fim, quando levanta a perna direita fala em francês.

Jackson, amigo de Fernando, ficou fascinado com o animal.

Em sua emoção perguntou: “E quando ele levanta as duas?”.
Antes que Fernando pudesse responder, o dinossauro gritou: “Ai eu caio, né tio Jack!!”.

Escreva um algoritmo que recebe uma string por parâmetro, que contém a situação de levantamento das pernas do dinossauro, e retorne o idioma em que ele irá falar.

Use a tabela abaixo para te auxiliar:

|  Exemplo de entrata  |  'Exemplo de saída   |

|       esquerda       |      'english'       |
|        direita       |     'français'       |
|        nenhuma       |     'português'      |
|        as duas       |  'Ai eu caio, né!!'  |

Caso o comando não for reconhecido, retorne:
----------------------
"Comando desconhecido."
----------------------

*/

function polyglotDinosaur(command) {
  if (command == 'esquerda') {
    return 'english';
  }
  else if (command == 'direita') {
    return 'français';
  }
  else if (command == 'nenhuma') {
    return 'português';
  }
  else if (command == 'as duas') {
    return 'Ai eu caio, né!!';
  }
  else {
    return 'Comando desconhecido.';
  }
}

module.exports = polyglotDinosaur;
