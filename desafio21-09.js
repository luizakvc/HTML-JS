// Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado. 
/**Código Condição de pagamento

1 À vista em dinheiro ou cheque, recebe 10% de desconto
2 À vista no cartão de crédito, recebe 15% de desconto
3 Em duas vezes, preço normal de etiqueta sem juros
4 Em três vezes, preço normal de etiqueta mais juros de 10% 
*/

/** 
 * Métodos de pagamento
 * -Dinheiro
 * -Cheque
 * -Cartão
 */

const precoProduto = parseFloat(prompt('Qual o preço do produto? (use . para acrescentar os centavos)')) // Para aceitar decimais
while(isNaN(precoProduto) || precoProduto <=0){
    alert(`O preço digitado é ivalido. Use apenas números.`)
    precoProduto = parseFloat(prompt('Qual o preço do produto? (use . para acrescentar os centavos'))
}

const msg = `
Informe o méodo de pagamento:
Digite 1 para pagamento em dinheiro
Digite 2 para pagamento em cheque
Digite 3 para pagamento em cartão
`

let pagamento = parseInt(prompt(msg)) // parseInt remove as casas decimais
while (isNan(pagamento) || pagamento < 1 || pagamento > 3) { // insNaN(pagamento) = pagamento == NaN
    alert(`Digite uma opção válida`)
    pagamento = parseInt(prompt(msg))
}

console.log(precoProduto)
console.log(pagamento)

// 1 - À vista
// if = Se ~ condição

//Se o valor de pagamento for 1 ou 2 tem desconto de 10%
if(pagamento == 1 || pagamento == 2) {
    const precoFinal = precoProduto * 0.9
    console.log(precoFinal)
    alert(`O preço final do seu produto com desconto é ${precoFinal.toFixed(2)} reais`)

    // .toFixed irá fixar a quantidade de casas decimais


}
// 2 - Cartão de crédito  1x 15% de desconto 2x sem desconto 3x> acréscimo de 10%
else if (pagamento == 3) { // Else será considerado se o primeiro IF for falso
    const parcelas = Number(prompt("Informe quantidade de parcelas"))

    if (parcelas == 1){
        const precoFinal = precoProduto * 0.85
        console.log(precoFinal)
        alert(`O preço final com desconto é ${precoFinal.toFixed(2)}.`)
    } else if (parcelas == 2) {
        alert(`O preço final é ${precoProduto} `)
    } else if (parcelas >= 3) {
        const precoFinal = precoProduto * 1.1
        console.log(precoFinal)
        alert(`O preço final do produto é ${precoFinal.toFixed(2)} reais. Será ${parcelas} parcelas de ${(precoFinal / parcelas).toFixed(2)} reais`)
    }
    
    
}



