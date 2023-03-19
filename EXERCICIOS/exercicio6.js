/* Crie uma classe para representar carros.
 * Os carros possuem uma marca, uma cor e um gasto médio de combustível por km rodado.
 * Crie um método que dado a quantidade de km e o preço do combustível nos dê o valor
 * gasto em reais para realizar o percurso.
 */
 

class Carro {
    marca;
    cor;
    kmPorLitro;
    precoCombustivel;
    kmRodado;

    constructor(marca, cor, kmPorLitro, precoCombustivel, kmRodado) {
        this.marca = marca;
        this.cor = cor;
        this.kmPorLitro = kmPorLitro;
        this.precoCombustivel = precoCombustivel;
        this.kmRodado = kmRodado;
    }

    verificarGasto () {
        let total = this.kmPorLitro * this.kmRodado * this.precoCombustivel
        console.log('O total gasto foi de R$ ' + total.toFixed(2) + ' reais.');
    }

}

const carro = new Carro('Golf', 'preto', 10, 5, 20);
console.log(carro);
carro.verificarGasto();

const carro2 = new Carro('Fiat Uno', 'vermelho', 13, 5, 10);
console.log(carro2);
carro2.verificarGasto();