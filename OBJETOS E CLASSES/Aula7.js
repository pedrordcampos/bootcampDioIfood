class Pessoa {
    nome;
    idade;

    // Sempre que é instanciado um objeto, passa primeiro pelo construct.
    constructor(nome, idade) {

        this.nome = nome;
        this.idade = idade;

    }

    descrever () {
        console.log(`Meu nome é ${this.nome}. Tenho ${this.idade} anos.`);
    } 
}

const pessoa = new Pessoa('Pedro', 38);
const pessoa2 = new Pessoa('Vania', 39);

function compararIdade (p, p2) {
    if (p.idade > p2.idade) {
        console.log(`${p.nome} é mais velho(a).`);
    } else if (p2.idade > p.idade) {
        console.log(`${p2.nome} é mais velho(a).`);
    } else {
        console.log(`${p.nome} e ${p2.nome } tem a mesma idade.`);
    }
    
}

compararIdade(pessoa, pessoa2);
