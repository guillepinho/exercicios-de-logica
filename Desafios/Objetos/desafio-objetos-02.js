/*

02 - Jogo de fantasia- Parte 2

Além dos pontos de vida (PV), será necessário estipular o equipamento inicial do(a) personagem.

Tudo isso deve ser feito no mesmo código, seguindo a seguinte tabela:

|   Classe     |   Pontos de Vida   |   Equipamento Inicial   |

|    Mago      |        5PV         |         Varinha         |
|   Arqueiro   |        10PV        |        Arco Curto       |
|   Guerreiro  |        15PV        |          Espada         |
|   Cavaleiro  |        20PV        |     Armadura Completa   |


Escreva um algoritmo que recebe o nome de uma classe e retorne os pontos de vida e o equipamento inicial do(a) personagem.

Por exemplo:
---------------
Entrada:
"Guerreiro"

Saída:
"15PV, Espada."
---------------

Desafio: faça sem usar estruturas condicionais (ifs ou switches).

*/

function fantasyGame2(className) {
  const table = {
    Mago: {
      pv: '5PV',
      equip: 'Varinha'
    },
    Arqueiro: {
      pv: '10PV',
      equip: 'Arco Curto'
    },
    Guerreiro: {
      pv: '15PV',
      equip: 'Espada'
    },
    Cavaleiro: {
      pv: '20PV',
      equip: 'Armadura Completa'
    }
  };

  return `${table[className].pv}, ${table[className].equip}.`;
}

module.exports = fantasyGame2;
