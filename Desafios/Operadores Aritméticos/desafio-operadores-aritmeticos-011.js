/*

11 - Loja de ração

Escreva uma algoritmo para uma loja de ração que recebe o preço de um produto e retorna as formas de pagamentos disponíveis.

Considere as seguintes premissas:
* À vista possui 10% de desconto e parcelado em 4x possui juros de 15%.

Exemplo:
-------------------------------
Entrada:
80

Saída:
"À Vista: R$72 ou 4x de: R$23"
-------------------------------

Obs: seguir o mesmo formato de retorno da mensagem de saída.

*/

function paymentOptions(price) {
  return `À Vista: R$${price * 0.9} ou 4x de: R$${Number(((price * 1.15) / 4).toFixed(2))}`;
}

module.exports = paymentOptions;
