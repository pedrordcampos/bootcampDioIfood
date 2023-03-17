/* 1. Faça um pograma para calcular o combustível gasto em uma viagem
 * Você terá três variáveis:
 * preço do combustível
 * valor médio de gasto do carro
 * distância em km
 *
 * Imprimir no console o valor que será gasto para realizar essa viagem
 */

let preco = 5;
let consumo = 10;
let distancia = 200;

let combustivelGasto = (distancia/consumo) * preco;
console.log('O valor gasto foi de R$ ' +combustivelGasto.toFixed(2)+ ' reais');