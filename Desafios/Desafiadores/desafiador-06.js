/*

6 - Analise de preços da lista de compras

Escreva um algoritmo que irá receber um array de produtos e retorne uma string no formato da saída que contem:

* O produto com maior preço;
* O preço do produto;
* A média do preços dos produtos.

Por exemplo:
---------------------------------------------------------------------------------------------------
Entrada:
[
  { name: 'lápis', price: 2 },
  { name: 'borracha', price: 4 },
  { name: 'caneta', price: 5 },
  { name: 'régua', price: 6 },
  { name: 'apontador', price: 3 },
  { name: 'teclado gamer', price: 180 },
  { name: 'mochila', price: 33 },
  { name: 'fone de ouvido', price: 57 },
  { name: 'mousepad', price: 35 },
]

Saída:
"O produto mais caro é teclado gamer e custa: R$ 180, a média de preços dos produtos é de: R$36.11."
----------------------------------------------------------------------------------------------------

*/

function productAnalysis(products) {
  let higherPrice = products[0].price;
  let higherProduct = products[0].name;
  let media = products[0].price;

  for (let i = 1; i < products.length; i++) {
    media += products[i].price;
    if (products[i].price > higherPrice) {
      higherPrice = products[i].price;
      higherProduct = products[i].name;
    }
  }

  media = (media / products.length).toFixed(2);

  return `O produto mais caro é ${higherProduct} e custa: R$ ${higherPrice}, a média de preços dos produtos é de: R$${media}.`;
}

module.exports = productAnalysis;

