/*

17 - Financiamento de veículo

Escreva um algoritmo para gerenciar as contas de um financiamento de veículo.

A pessoa que quer fazer o financiamento precisa informar:

* o valor total do carro;
* o valor da entrada a ser dada;
* quantidade de parcelas que ela deseja pagar.

A loja em questão usa uma taxa de juros fixa de 5% sobre o valor do financiamento.

Desenvolva a solução e retorne conforme o exemplo (os valores monetários precisam ter 2 casas decimais após a virgula):

--------------------------------

Valor Financiado: R$35000,00;
Valor do Juros: R$1750,00;
Quantidade de Parcelas: 36;
Valor da Parcela: R$1020,83;
Valor Total do Carro: R$46750,00.
--------------------------------

*/

function carFinancing(carPrice, entranceValue, quota) {
  const financiado = carPrice - entranceValue;
  const juros = financiado * 0.05;
  const financiadoEJuros = financiado + juros;
  const parcela = Number(financiadoEJuros / quota);
  const total = carPrice + juros;

  const financiadoR = (Math.round(financiado * 100) / 100).toFixed(2).replace(/[.]/g, ',');
  const jurosR = (Math.round(juros * 100) / 100).toFixed(2).replace(/[.]/g, ',');
  const totalR = (Math.round(total * 100) / 100).toFixed(2).replace(/[.]/g, ',');
  const parcelaR = (Math.round(parcela * 100) / 100).toFixed(2).replace(/[.]/g, ',');

  return `Valor Financiado: R$${financiadoR};\nValor do Juros: R$${jurosR};\nQuantidade de Parcelas: ${quota};\nValor da Parcela: R$${parcelaR};\nValor Total do Carro: R$${totalR}.`;
}

module.exports = carFinancing;
