/* Crie uma classe para representar pessoas.
 * Para cada pessoa, teremos os atributos: nome, peso e altura.
 * As pessoas devem ter a capacidade de dizer o valor do seu imc (IMC = peso / (altura * altura))
 * Instancie uma pessoa chamada José que tenha 70kg, 1.75m e peça ao José para dizer o valor do seu IMC.
 */
 
class Pessoa {
nome;
peso;
altura;

    constructor (nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    informeIMC () {
        return Math.round(this.peso / (Math.pow(this.altura, 2)));
    }

    classificarIMC () {
        const imc = this.informeIMC();

        // Tabela de classificação do IMC
        if (imc < 18.5) {
            return ('Abaixo do peso');
        } else if (imc >= 18.5 && imc < 25) {
            return ('Peso normal');
        } else if (imc >= 25 && imc < 30) {
            return ('Acima do peso');
        } else if (imc >= 30 && imc < 40) {
            return ('Obesidade');
        } else if (imc >= 40) {
            return ('Obesidade grave');
        } else {
            return ('Não foi possível calcular o peso');
        }
    }

} 

const pessoa = new Pessoa('José', 70, 1.75);
console.log(pessoa);

// Pega o retorno do método classificarIMC e imprime
console.log(pessoa.classificarIMC());
  