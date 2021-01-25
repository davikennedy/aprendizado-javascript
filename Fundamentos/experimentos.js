let a = 3

global.b = 123

this.c = 456
this.d = false
this.e = 'teste'
// Isso é mais comum: module.exports = { e: 456, f: false, g: 'teste' }

console.log(a)
console.log(global.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this) // this e módulo exports é a mesma coisa
console.log(module.exports)

// Criando uma variável maluca, sem var ou let!
abc = 3 // Não faça isso em casa!!!
console.log(global.abc)

// Se for estritamente necessário manipular o contexto global, as boas práticas sugerem a criação de objetos para esse fimon