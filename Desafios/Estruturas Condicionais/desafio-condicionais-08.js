/*

08 - Descubra a idade mínima

Escreva um algoritmo que recebe a idade de Marina, Silvia e Iza e retorne a mensagem informando a pessoa mais jovem no seguinte formato:
---------------------------------------------------
"x é a mais jovem e possui y anos de idade."
---------------------------------------------------

*/

function findYoungerPerson(marinaAge, silviaAge, izaAge) {
    let name = '';
    let younger = Number();
    if (marinaAge < silviaAge && marinaAge < izaAge) {
        younger = marinaAge;
        name = 'Marina';
    }
    else if (silviaAge < marinaAge && silviaAge < izaAge) {
        younger = silviaAge;
        name = 'Silvia';
    }
    else {
        younger = izaAge;
        name = 'Iza';
    }
    return `${name} é a mais jovem e possui ${younger} anos de idade.`;
}

module.exports = findYoungerPerson;
