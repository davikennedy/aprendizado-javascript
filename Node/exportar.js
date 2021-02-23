/*  
    module.exports === exports === this
    Todos apontam para o mesmo endereço de memória
*/ 
console.log(module.exports === this) // true
console.log(module.exports === exports) // true

this.a = 1
exports.b = 2
module.exports.c = 3

// Essa atribuição de objeto para exports não é adequada para exportação
exports = null
console.log(module.exports)

// Essa atribuição de objeto para exports não é adequada para exportação
exports = {
    nome: 'Teste'
}

// Na exportação de módulos, o que é retornado é 'module.exports'
console.log(module.exports)

module.exports = {publico: true}