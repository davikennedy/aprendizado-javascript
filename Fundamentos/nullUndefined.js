const a = {name: 'Teste'}
const b = a
b.name = 'Opa'

console.log(a.name)

let valor // não inicializada
console.log(valor)

valor = null // Ausência de valor
console.log(valor)

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // Evite atribuir undefined
console.log(!!produto.preco)
// delete produto.preco - Essa é a maneira de eliminar um atributo de um objeto
console.log(produto)

produto.preco = null // Sem preço