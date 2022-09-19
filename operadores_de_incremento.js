alert('Código funcionando!') //mostrar uma mensagem para o usuário
const nomeusuario = prompt('Olá, usuário, qual o seu nome?')

let num = Number(prompt('Olá, ' + nomeusuario + '. Digite algum número, por favor.')) //vai transformar o texto em número
// console.log(typeof num) // typeof retorna o tipo do valor que a variavel tem

// const sucessor = num + 1
// const antecessor = num - 1
 
//Operadores de incremento: Sucessor = num++ // num + 1

console.log(num++) // 5 - operador de pós-incremento
console.log(num) // 6 
console.log(++num) // 7 - operador de pré-incremento

//Operadores de deremento
console.log(num--) // 7
console.log(num) // 6
console.log(--num) // 5

