/** Funções são blocos de construções fundamentais em JavaScript. Uma função é um procedimento de JS - um conjunto de instruções que executa uma tarefa ou cacula um valor. Para usar uma função, você deve defini-la em algum lugar no escopo do qual você quiser chamá-la.  */
/** Parâmetros:
 * São valores que passamos para as funções, para que elas utilizem esses valores dentro delas ( como uma equação que recebe valores de x)
 */


function cumprimentar(mensagem, repetir = 1) { 
    /**esse = 1 seria o valor a ser executado caso repetir não fosse definido */
    for (let i = 1; i <= repetir; i++){
    //alert(mensagem)
    }
}
cumprimentar('Olá, devs')

function soma (num, num2) {
    return num + num2 // sempre que a função for citada ira RETORNAR "num + num2"
}
// Nada que é colocado após o return é lido. Sempre será a ultima linha do cód.
//let resultado = soma(4, 7)
//console.log(resultado)

function maiorValor (a, b){
    if (a > b){
    return a
    } else {
        return b
    }
}
//const num1 = parseInt(prompt(`Informe o primeiro número `))
//const num2 = parseInt(prompt(`Informe o segundo número `))
//alert (`O maior número entre esses dois valores é ${maiorValor(num1, num2)}`)

/** Crie uma função que gera o resultado de uma equação de segundo grau
 * ax² + bx + c = 0
 * delta = b² - 4ac
 * x = - b +- Vdelta/2a
 */
function equacaoSegundograu(a, b, c){
    const delta = b ** 2 - 4 * a * c
    const raizDelta = Math.sqrt(delta)
    const x1 = (- b + raizDelta) / (2 * a)
    const x2 = (- b - raizDelta) / (2 * a)
    return [x1, x2]
}

console.log(equacaoSegundograu(1, -1, -12))