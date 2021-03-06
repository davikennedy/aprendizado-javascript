// Simulando o funcionamento do método 'filter'
Array.prototype.filter2 = function(callback) {
    const novoArray = []
    for(let i = 0; i < this.length; i++) {
        if(callback(this[i])) {
            novoArray.push(this[i])
        }
    }
    return novoArray
}

const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'iPad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de Plástico', preco: 18.99, fragil: false}
]

// Desafio: Imprimir um array contendo apenas os produtos caros (a partir de 500) e que são frágeis

// Maneira 1
console.log(produtos.filter2(function(produto) {
    return produto.preco > 500 && produto.fragil
}))

// Maneira 2
const produtoCaro = produto => produto.preco >= 500
const produtoFragil = produto => produto.fragil

console.log(produtos.filter2(produtoCaro).filter2(produtoFragil))