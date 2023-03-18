/* Elabore um algorítimo que calcule o que deve ser pago por um produto, considerando o preço 
 * normal de etiqueta e a escolha de uma forma de pagamento.
 * Utilize os códigos da tabela a seguir para ler qual condição de pagamento será escolhida
 * e efetuar o cálculo adequado.

 * Código de condição de pagamento:
 * [1] - À vista no débito, recebe 10% de desconto. 
 * [2] - À vista no dinheiro ou PIX, 15% de desconto.
 * [3] - Em duas vezes, preço normal de etiqueta sem juros.
 * [4] - Acima de duas vezes, acréscimo de 10% de juros sobre o preço da etiqueta. */

let precoEtiqueta = 100;
let formaPagamento = 1;

if (formaPagamento == 1) {
    console.log(precoEtiqueta - (precoEtiqueta * 0.1));
} else if (formaPagamento == 2) {
    console.log(precoEtiqueta - (precoEtiqueta * 0.15));
} else if (formaPagamento == 3) {
    console.log(precoEtiqueta);
} else if (formaPagamento == 4) {
    console.log(precoEtiqueta + (precoEtiqueta * 0.1));
} else {
    console.log('Não foi possível concluir a sua transação');
}

