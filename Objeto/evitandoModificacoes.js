// Object.preventExtensions -> Não permite inclusão de novos atributos, porém, permite a exclusão
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})
console.log('Extensível:', Object.isExtensible(produto))
console.log(produto)

produto.nome = 'Borracha'
produto.descricao = 'Borracha Escolar Branca' // Essa linha será ignorada, pois está tentando adicionar um atributo a um objeto definido com 'preventExtensions' 
delete produto.tag
console.log(produto)



// Object.seal -> Não permite inclusão e nem exclusão de novos atributos
const pessoa = {nome: 'Juliana', idade: 35}
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))
console.log(pessoa)

pessoa.sobrenome = 'Silva' // Essa linha será ignorada, pois está tentando adicionar um atributo a um objeto definido com 'seal' 
delete pessoa.nome // Essa linha será ignorada, pois está tentando excluir um atributo de um objeto definido com 'seal' 
pessoa.idade = 29
console.log(pessoa)



// Object.freeze = selado + valores Constantes -> Maneira de criar um objeto com impossibilidade de alterações
const pessoaConstante = Object.freeze({nome: 'Maria Fernanda'})
console.log(pessoaConstante)
delete pessoaConstante.nome // Essa linha será ignorada, pois está tentando excluir um atributo de um objeto definido com 'freeze'
pessoa.sobrenome = 'Amaral Rodrigues' // Essa linha será ignorada, pois está tentando adicionar um atributo a um objeto definido com 'freeze' 
console.log(pessoaConstante)