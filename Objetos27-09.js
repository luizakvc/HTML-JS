/** Objeto é uma estrutura que permite organizar dados na forma de chave-valor
 * {} para criar objetos, terá um valor depois
 */
let pessoa = {
    nome: 'Carlos', /* nome é uma propriedade*/
    idade: 6,
    cpf: '123.456.789-00',
    altura: 115,
    end: { /* exemplo de uma propriedade dentro da outra*/
        rua: 'Avenida',
        numero: 256,
        estado: 'Goiás',
        complemento: 'Sem complemento',
        cep: '12.123-321'
    },
    solteiro: true,
    habilidades: ['React', 'Java', 'Golang', 'Rust'], /* Propriedades podem ter qualquer valor, até array*/
    cumprimentar() { /* Função, não é a aula de hoje*/
        console.log(`Olá, tudo bem? meu nome é ${this.nome}`) /* this= para citar algo dentro do mesmo objeto */
    }
}
console.log(pessoa)
console.log(pessoa.habilidades)
console.log(pessoa.habilidades[2])
pessoa.cumprimentar()

pessoa.nome = 'Augusto'
pessoa.cumprimentar()

pessoa.habilidades.push('Angular')
console.log(pessoa.habilidades)

console.log(pessoa.end.rua)
pessoa.end.rua = 'Ruela'
console.log(pessoa.end.rua)

