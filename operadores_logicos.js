// Operadores lógicos

// E -> &&; as duas condições tem que ser verdadeiras

// A média precisa ser maior ou igal a 7 E presacisa de, no mínimo, 80% de presença
const media = (7 + 10 + 10) /3
const presenca = 0.95

console.log(media >= 7 && presenca >= 0.8)  // se a primeira condição for falsa, a segunda nem é testada

// Operador OU  -> || ; pelo menos uma das condições tem que ser verdadeira
console.log(4 > 7 || 3 < 2)  // false
console.log(5 <= 8 || 15 > 3)  // true  // se a primeira for verdadeira ele já não testa as outras

// Operador Não -> ! ; inverte o falso e o verdadeiro

const resultado = 5 < 3 // false

console.log(!resultado) //true

const logado = false
// if (!logado)
  //  console.log('você não pode acessar o site')



