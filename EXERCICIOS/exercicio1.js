/* Faça um algorítimo que dados as 3 notas tiradas por um aluno
 * em um semestre da faculdade, calcule e imprima a sua média 
 * e a sua classificação conforme a tabela abaixo:
 * 
 * Classificação:
 * - média menor que 5, reprovação
 * - média entre 5 e 7, recuperação
 * - média acima de 7, passou de semestre
 */

let n1 = 3;
let n2 = 5;
let n3 = 7;
let media = (n1 + n2 + n3) / 3;
console.log(`A média do aluno é: ${media}`);

if (media < 5) {
    console.log('Reprovado!');
} else if (media >= 5 && media < 7) {
    console.log('Recuperação!');
} else if (media >= 7){
    console.log('Passou de semestre!');
} else {
    console.log('Não foi possível concluir a sua requisição');
}