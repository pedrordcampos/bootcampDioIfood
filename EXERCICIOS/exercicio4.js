function escrevaMeuNome(nome) {
    console.log(`Meu nome é ${nome}`);
}

function verificaIdade(idade) {
    return (idade >= 18 ? 'Sou maior de idade' : 'Sou menor de idade'); 
}

(function() {
    escrevaMeuNome('Pedro');
    console.log(verificaIdade(38));
})();