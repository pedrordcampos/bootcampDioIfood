/* Fórmula do IMC 
 * IMC = peso / (altura * altura)
 *
 * Elabore um programa que dado o peso e altura de um adulto,
 * mostre sua condição de acordo com a tabela:
 * 
 * Abaixo de 18.4 -> Abaixo do peso
 * Entre 18.5 e 24 -> Peso normal
 * Entre 25 e 29 -> Acima do peso
 * Entre 30 e 39 -> Obesidade
 * Acima de 40 -> Obesidade grave
 */

let peso;
let altura;
let imc;
let calculoIMC;
let diagnostico;

function iMC(peso, altura) {
    return imc = peso / Math.pow(altura, 2);
}

function tabelaImc(imc) {

    if (imc < 18.5) {
        return 'Abaixo do peso';
    } else if (imc >= 18.5 && imc < 25) {
        return 'Peso normal';
    } else if (imc >= 25 && imc < 30) {
        return 'Acima do peso';
    } else if (imc >= 30 && imc < 40) {
        return 'Obesidade';
    } else if (imc >= 40) {
        return 'Obesidade grave';
    } else {
        return 'Não foi possível calcular o peso';
    }
}

// Função anônima imediatamente invocada
(function () {
    calculoIMC = console.log(iMC(48, 1.56).toFixed(2)); 
    diagnostico = console.log(tabelaImc(imc));
})();

