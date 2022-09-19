// Operadores de comparação --  verdadeiro (true) ou Falso (false)

//Igualdade ==
const msg = "Eu sou uma mensagem"
const msg2 = "Eu sou outra mensagem"

console.log(msg == msg2) // false   // usa == para fazer comparação

const num = 5
const num2 = 5

console.log(num == num2) // true

let a = 78
let b = '78'

console.log(a == b) // true

//Identicos ==
console.log(a === b) // false  // testa o valor e o TIPO de variável

//Diferença !=
console.log(msg != msg2)  //true
console.log(a != b) // false
console.log(a !== b) // true   // diferente no valor E/OU tipo

// Maior > ; maior ou igual >= ; compara os valores apenas ; Menor < ; menor ou igual <=
a = 56
b = 30
let c = 500
let d = 500

console.log(a > b) // true
console.log(c >= d) //true
console.log(6 > 9) //false

console.log( b < a) // true
console.log(8 <= 5) // false