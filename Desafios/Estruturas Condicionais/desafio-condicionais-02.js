/*

02 - Switch Case

Refatore a função abaixo para utilizar if/else.

NOTAS
abaixo de 10: PÉSSIMO
entre 11 e 30: RUIM
entre 31 e 50: REGULAR
entre 51 e 70: MEDIANO
entre 71 e 90: ÓTIMO
acima de 91: EXCELENTE

*/

function studentSituation(studentNote) {
  let resultado = '';
  if (studentNote >= 0 && studentNote <= 10) {
    resultado = 'PÉSSIMO';
  }
  else if (studentNote > 10 && studentNote <= 30) {
    resultado = 'RUIM';
  }
  else if (studentNote > 30 && studentNote <= 50) {
    resultado = 'REGULAR';
  }
  else if (studentNote > 50 && studentNote <= 70) {
    resultado = 'MEDIANO';
  }
  else if (studentNote > 70 && studentNote <= 90) {
    resultado = 'ÓTIMO';
  }
  else if (studentNote > 90 && studentNote <= 100) {
    resultado = 'EXCELENTE';
  }
  else {
    resultado = 'erro';
  }
  return resultado;
}

module.exports = studentSituation;
