// 1) Crie um programa que dado um número imprima a sua taboada.

// let num = 1;
// let taboada = 0;

// for (let i = 1; i <= 10; i++) {
    
//     taboada = num * i;
//     console.log(num + ' * ' + i + ' = ' + taboada);

// }

/* 2) Crie um programa que seja capaz de percorrer uma lista de números
 * e imprima cada número PAR que for encontrado.
 */

const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (i = 0; i < lista.length; i++) {

    if (lista[i] % 2 == 0){
        console.log(lista[i]);
    }
}
