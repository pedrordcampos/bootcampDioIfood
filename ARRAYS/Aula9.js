const notas = [];

notas.push(5);
notas.push(7);
notas.push(8);
notas.push(2);
notas.push(5);
notas.push(5);
notas.push(5);

let soma = 0;

// Mostrar o tamanho da lista
console.log(notas.length);

for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    soma = soma + nota;
}

const media = soma / notas.length;
console.log(`A média é ${Math.round(media).toFixed(1)}`);

// String é um array de caractéres
const nome = 'Pedro Ricardo';

for (let index = 0; index < nome.length; index++) {
    const element = nome[index];
    console.log(element);
}