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