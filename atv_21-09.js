/* àlcool 
até 25L, desconto de 2% por litro
>25L, desconto de 4% por litro

Gasolina 

até 25L, desconto de 3% por litro
>25L desconto de 5% por litro */

const litros = parseFloat(prompt("Digite aqui a quantidade de litros vendidos"))
console.log(litros)
const msg = `
Qual combustível foi usado?
Digite A para Alcool 
Digite G para Gasolina
`
const combustivel = prompt(msg)
console.log(combustivel)

const descontoA1 = 1.9 * 0.02
const descontoA2 = 1.9 * 0.04

const descontoG1 = 2.7 * 0.03
const descontoG2 = 2.7 * 0.05


if (combustivel == 'A') {
    if (litros <= 25) {
        const precoFinal = (1.86 * litros) 
        console.log(precoFinal)
        alert(`O preço a ser pago será ${precoFinal.toFixed(2)} reais` )
    } else if (litros > 25){
        const precoFinal = (1.9 * litros) - (litros * descontoA2)
        console.log(precoFinal)
        alert(`O preço a ser pago será ${precoFinal.toFixed(2)}`)

    }
} else if (combustivel == 'G') {
    if (litros <= 25) {
    const precoFinal = (2.7 * litros) - (litros * descontoG1)
    console.log(precoFinal)
    alert(`O preço a ser pago será ${precoFinal.toFixed(2)}`)
    } else if (litros > 25) {
        const precoFinal = (2.7 * litros) - (litros * descontoG2)
        console.log(precoFinal)
        alert(`O preço a ser pago será ${precoFinal.toFixed(2)}`)
    }
}