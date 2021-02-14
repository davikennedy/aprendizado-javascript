//Simulando o funcionamento do método 'map'
Array.prototype.map2 = function(callback) {
    const novoArray = []
    for (let i = 0; i < this.length; i++) {
        novoArray.push(callback(this[i], i, this))    
    }
    return novoArray
}

const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Lápis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}',
]

// Desafio: Retornar um array apenas com os preços
const converteParaObjeto = json => JSON.parse(json)
const retornaPreco = produto => produto.preco
let resultado = carrinho.map2(converteParaObjeto).map2(retornaPreco)

console.log(resultado)