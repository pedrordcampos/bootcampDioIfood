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

let peso = 40;
let altura = 1.80;
let imc = peso / Math.pow(altura,2)

if (imc < 18.5) {
    console.log('Abaixo do peso');
} else if (imc >= 18.5 && imc < 25) {
    console.log('Peso normal');
} else if (imc >= 25 && imc < 30) {
    console.log('Acima do peso');
} else if (imc >= 30 && imc < 40) {
    console.log('Obesidade');
} else if (imc >= 40) {
    console.log('Obesidade grave');
} else {
    console.log('Não foi possível calcular o peso');
}

