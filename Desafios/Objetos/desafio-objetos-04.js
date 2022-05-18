/*

04 - Quem é a pessoa mais velha?

Dado um array de pessoas, escreva um algoritmo que identifique qual tem a maior idade e retorne o nome da pessoa e sua idade.

O array terá o seguinte formato:
people = [
  { name: 'Ramon', age: 35 },
  { name: 'José', age: 28 },
  { name: 'Amanda', age: 19 }
];

O retorno deve ser no seguinte formato:
---------------------------------
"x tem a maior idade com y anos."
---------------------------------

*/

function getOldPerson(arrPeople) {
  let older = arrPeople[0].age;
  let nameOlder = arrPeople[0].name;
  for (let i = 1; i < arrPeople.length; i++) {
    if (arrPeople[i].age > older) {
      older = arrPeople[i].age;
      nameOlder = arrPeople[i].name;
    }
  }
  return `${nameOlder} tem a maior idade com ${older} anos.`;
}

module.exports = getOldPerson;
