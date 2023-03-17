/* 1. Faça um pograma para calcular o combustível gasto em uma viagem
 * Você terá cinco variáveis:
 * preço do etanol
 * preço da gasolina
 * tipo do combustível
 * valor médio de gasto do carro
 * distância em km
 *
 * Imprimir no console o valor que será gasto para realizar essa viagem
 */

let tipoCombustivel = 'gasolina';
let etanol = 5;
let gasolina = 10;
let consumo = 10;
let distancia = 200;

preco = (tipoCombustivel == 'etanol') ? etanol : gasolina;

let combustivelGasto = (distancia/consumo) * preco;
console.log('O valor gasto foi de R$ ' +combustivelGasto.toFixed(2)+ ' reais');