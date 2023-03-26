// Dados de entrada
const array = [5, 50, 10, 98, 23];
let max = 0; 

function gets() {
    // Operador spread
    // let max = Math.max(...array);
    //  return max;

    // Utilizando o reduce
    let max = array.map(Number).reduce(function(a, b) {
        return Math.max(a, b);
    });
    return max;

    // for (let i = 0; i < array.length; i++) {
    //     const num = array[i];

    //     if (num > max) {
    //         max = num;
    //     }
        
    // }
    // return max;

}

function print(texto) {
    console.log(texto);
}

module.exports = {gets, print}