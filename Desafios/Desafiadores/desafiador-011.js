/*

11 - Array de notas musicais - 3

Relembrando, dada a escala natural de Dó, cada uma das 7 notas possui um grau representado por um algarismo romano conforme abaixo:

| Dó | Ré | Mi  | Fá | Sol | Lá | Si  |
| I  | II | III | IV |  V  | VI | VII |

Além disso, cada nota forma um acorde chamado tríade.

A tríade é composta por uma sequência a partir dela com a "primeira" nota, a "terça" e a "quinta".

Exemplos:

Tríade de Dó: Dó (a primeira), Mi (a terça), Sol (a quinta).
Tríade de Ré: Ré (a primeira), Fá (a terça), Lá (a quinta).

Escreva um algoritmo que recebe um array de notas, e retorne um outro array de objetos com os graus das notas na escala de dó e as notas que formam sua tríade.

Por exemplo:
-------------------------------
Entrada:
['Ré', 'Sol', 'Dó']

Saída:
 [
   {
     degree: 'II',
     triad: ['Ré', 'Fá', 'Lá']
   },
   {
     degree: 'V',
     triad: [ 'Sol', 'Si', 'Ré' ]
   },
   {
     degree: 'I',
     triad: ['Dó', 'Mi', 'Sol']
   },
 ]
--------------------------------

*/

function musicalNotes3(notes) {
  const notas = [
    {
      note: 'Dó',
      degree: 'I',
      triad: []
    },
    {
      note: 'Ré',
      degree: 'II',
      triad: []
    },
    {
      note: 'Mi',
      degree: 'III',
      triad: []
    },
    {
      note: 'Fá',
      degree: 'IV',
      triad: []
    },
    {
      note: 'Sol',
      degree: 'V',
      triad: []
    },
    {
      note: 'Lá',
      degree: 'VI',
      triad: []
    },
    {
      note: 'Si',
      degree: 'VII',
      triad: []
    },
  ];


  for (let i = 0; i < notas.length; i++) {
    let third = i + 2;
    let fifth = i + 4;
    if (third >= 7) {
      third = (third - notas.length);
    }
    if (fifth >= 7) {
      fifth = (fifth - notas.length);
    }
    notas[i].triad.push(notas[i].note, notas[third].note, notas[fifth].note);
  }

  const notesArray = [];

  for (let j = 0; j < notes.length; j++) {
    for (let k = 0; k < notas.length; k++) {
      if (notes[j] == notas[k].note) {
        notesArray.push({ degree: notas[k].degree, triad: notas[k].triad });
      }
    }
  }
  return notesArray;
}

module.exports = musicalNotes3;
