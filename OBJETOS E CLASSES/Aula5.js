const dadosPessoais = {
    nome: 'Pedro',
    idade: 38,

    // Função dentro do objeto
    descrever: function () {
        console.log(`Meu nome é ${this.nome}. Tenho ${this.idade} anos.`);
    }
}

console.log(dadosPessoais.nome);
console.log(dadosPessoais.idade);

// Incrementar um objeto
dadosPessoais.altura = 1.79;

// Deletar um valor do objeto
delete dadosPessoais.altura;

console.log(dadosPessoais);

dadosPessoais.descrever();

// Acessar chave e valor por string dinamicamente
let atributo = 'nome';
console.log(dadosPessoais[atributo]);
console.log(dadosPessoais['idade']);

