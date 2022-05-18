/*

06 - Nome do cachorro

Joana adotou um cachorrinho e decidiu usar o nome de suas comidas favoritas para dar nome
a ele, ela vai usar as 3 primeiras letras do seu salgadinho favorito e juntar com as 3 ultimas
letras do seu doce favorito.

Escreva um algoritmo que recebe o nome do salgadinho e o nome do doce e retorne o nome do cachorrinho de Joana.

Por exemplo:
--------------------
Entradas:
"Chocolate", "Pudim"

Saída:
"Chodim"
--------------------

*/

function dogName(snack, sweet) {
  const first = snack.slice(0, 3);
  const last = sweet.slice(-3);
  const name = first + last;
  return `O cachorrinho de Joana vai se chamar: ${name}`;
}

module.exports = dogName;
