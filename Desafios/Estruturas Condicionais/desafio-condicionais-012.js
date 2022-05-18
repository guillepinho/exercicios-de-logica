/*

12 - IMC

A classificação do Índice de Massa Corporal (IMC), pode ajudar a identificar obesidade ou desnutrição em crianças, adolescentes, adultos e idosos.

O IMC é a relação entre peso e altura e o cálculo é feito de acordo com a fórmula:
 * IMC = peso/ (altura x altura)

Onde o peso é dado em Kg (quilogramas), a altura em m (metros) e o IMC em kg/m2 (quilograma por metro quadrado).

Depois de obter o resultado, é verificado em que faixa o resultado se encontra, podendo indicar:
* Magreza, quando o resultado é menor que 18,5 kg/m2;
* Normal, quando o resultado está entre 18,5 e 24,9 kg/m2;
* Sobrepeso, quando o resultado está entre 24,9 e 30 kg/m2;
* Obesidade, quando o resultado é maior que 30 kg/m2.

Escreva um algoritmo para calcular o IMC e retorne a faixa do resultado.

Obs:
IMC precisa ter 1 casa decimal depois da vírgula;
Retorne a resultado no seguinte formato:
------------------------------------------------
"Seu IMC é: 23.7 kg/m2. O resultado foi: Normal"
------------------------------------------------

 */

function IMC(weight, height) {
  const imc = weight / (height * height);
  const roundIMC = Math.round(imc * 10) / 10;

  if (roundIMC < 18.5) {
    return `Seu IMC é: ${roundIMC} kg/m2. O Resultado foi: Magreza`;
  }
  else if (roundIMC < 24.9) {
    return `Seu IMC é: ${roundIMC} kg/m2. O Resultado foi: Normal`;
  }
  else if (roundIMC < 30) {
    return `Seu IMC é: ${roundIMC} kg/m2. O Resultado foi: Sobrepeso`;
  }
  else {
    return `Seu IMC é: ${roundIMC} kg/m2. O Resultado foi: Obesidade`;
  }
}

module.exports = IMC;