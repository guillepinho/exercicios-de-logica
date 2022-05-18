/*

13 - Cor aleatória

Elabore uma função que retorne uma cor RGB aleatória no formato:
--------------
"rgb(r, g, b)"
--------------

 */

function generateColor() {
  const r = Math.floor(Math.random() * (255, 0));
  const g = Math.floor(Math.random() * (255, 0));
  const b = Math.floor(Math.random() * (255, 0));
  return `rgb(${r}, ${g}, ${b})`;
}

module.exports = generateColor;
