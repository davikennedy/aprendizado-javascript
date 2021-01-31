const pessoa = {nome: 'João'}
pessoa.nome = 'Pedro'
console.log(pessoa)

// Impede a modificação do objeto
Object.freeze(pessoa)

// A alteração do atributo 'nome' não será executada
pessoa.nome = 'Joaquim'
console.log(pessoa)

// Maneira de criar um objeto com impossibilidade de alterações
const pessoaConstante = Object.freeze({nome: 'Marcos'})
console.log(pessoaConstante)