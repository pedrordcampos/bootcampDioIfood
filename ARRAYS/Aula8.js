const alunos = ['Thor', 'Zeus'];

// Duas formas de inserir no array
alunos.push('Pedro');
alunos[3] = 'Vania';

console.log(alunos);

// Remover o primeiro elemento do array
alunos.shift();
console.log(alunos);

// Remover o último elemento do array
alunos.pop();
console.log(alunos);

// Mostrar posição de um array
console.log(alunos[0]);

// Array permite tipos de dados diferentes
const arrayTipos = [70, 'Pedro', false];
console.log(arrayTipos);