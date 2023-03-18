
class Pessoa {
    nome;
    idade;

    // Sempre que é instanciado um objeto, passa primeiro pelo construct.
    constructor() {
        this.nome = 'Nome';
        this.idade = 0;
    }

    descrever () {
        console.log(`Meu nome é ${this.nome}. Tenho ${this.idade} anos.`);
    } 
}

// Criando nova instância do objeto
const pessoa = new Pessoa;
pessoa.nome = 'Pedro';
pessoa.idade = 38;

const pessoa2 = new Pessoa;
pessoa2.nome = 'Vania';
pessoa2.idade = 39;

const pessoa3 = new Pessoa;

console.log(pessoa);
console.log(pessoa2);
console.log(pessoa3);

pessoa.descrever();
pessoa2.descrever();
pessoa3.descrever();
