/**
 * Arrays ou Vetores é um tipo especial que te permite armazenar diversos valores em apenas um local
 */

//let arr3 = new  Array()        // new = criar objetos;  
//let arr2 = new Array(5)       // dentro do parenteses informar o tamanho inicial do array
//a primeira posição de um array é 0, logo 10 = 0, 15 = 1, 9.8 = 3, string= 4

let arr = [10, 15, 9.8, 'Texto dentro do Array', "Olá", true, false]  // Forma mais usada; dentro dos cochetes já são os valores separados por ,
console.log(arr[6]) // false
arr[6] = 'Outro texto'
console.log(arr[6]) // outro texto
console.log(arr[8]) // undefined
arr[8] = 'Agora a posição 8 existe'
console.log(arr[8])


const lista = ['João', 'Maria', 'Paulo', 'Pedro', 'Vitória', 'Augusto', 'Fábio', 'Larissa']
console.log(lista)
lista.push('Roberta')  // Adicionar no final
console.log(lista)
lista.unshift('Gustavo') // Adiciona no inicio
console.log(lista)
lista.pop() // Remove o ultimo valor do array
console.log(lista)
lista.shift() // Remove o primeiro valor do array
console.log(lista)
console.log(lista.concat('Júlio')) // mesmo que o push só que gerando uma outra lista,a lista original não é mudada
console.log(lista.join(' + ')) // vai unir os valores do array em uma string