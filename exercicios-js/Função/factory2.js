// Factory simples - Função que retorna um objeto

function porcentagem(valor, percent) {
   return valor / 100 * percent
}

function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: porcentagem(preco, 15)
    }
}

console.log(criarProduto('Notebook', 2199.49))
console.log(criarProduto('iPad', 799))