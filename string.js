//Delimitação de strings (texto)

const aspasSimples = 'Olá' // não tem como quebrar linha com aspas simples
console.log(aspasSimples)

// caracteres de escapa

const aspasDuplas = "olá de novo \nJaveiro" // \n quebra a linha
console.log(aspasDuplas)

const textoCrase = `Crase é exclusivo do JavaScript` // ser der enter no meio do texto da pra quebrar linha
console.log(textoCrase)

// Métodos das strings (funções que executam alguma coisa)

const texto = 'You call me again, drunk in your Benz. Driving home under the influence.'

console.log(texto)
console.log(texto.toUpperCase()) // vai deixar o texto da constante em Maiúsculo
console.log(texto.toLowerCase()) // vai deixar o texto da constante em minúsculo
console.log(texto.concat(' You scared me to death, but I`m wasting my breath')) // concatena o texto anterior com o novo
console.log(texto[5]) // vai mostrar apenas a letra na posição 5
console.log(texto.substring(12, 52)) // também para recortar o texto de uma posição x até y - no caso a partir da posição 12 até a 52
console.log(texto.replace('drunk', 'wasted')) //procura no código a PRIMEIRA ocorrência e substitui // Case sensitiva (diferença maiusc/minusc)
console.log(texto.replaceAll('in', 'coco')) // procura no código e substitui todos //  case sensitiva
console.log(texto.replace(/in/g, 'coco'))  // faz o mesmo que o replaceAll

const html = '<!DOCTYPE html>\n<html></html>'

console.log(html.startsWith('<!DOCTYPE html>')) // verdadeiro ou falso // reconhecer tal arquivo
console.log(html.startsWith('Wasted'))
console.log(html.endsWith('</html>'))

const msg = '                    Olá, olá '

console.log(msg)
console.log(msg.trim()) // retira os espaços em excesso no inicio e/ou fim do texto

let senha = 'happier'

console.log(senha.length)  // saber a quantidade de caractere
console.log(senha.length > 8)  // false
