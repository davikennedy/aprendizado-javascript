// Coleção dinâmica de pares chave/valor

const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Genérica'
produto.preco = 220

// Imprime produto completo
console.log(produto)

// Remove atributos do objeto produto
delete produto.preco
delete produto['marca do produto']

// Imprime produto apenas com o atributo nome
console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Raul',
        idade: 56,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 123
        }
    },
    condutores: [{
        nome: 'Junior',
        idade: 19
    }, {
        nome: 'Ana',
        idade: 42
    }],
    calcularValorSeguro: function () {
        //...
    }
}

// Alteração de valores de atributos do objeto carro
carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['logradouro'] = 'Av. Gigante'

// Impressão do objeto carro, com valores alterados
console.log(carro)

// Delete de atributos e função calcularValorSeguro, do objeto carro
delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorSeguro

// Impressão do objeto carro, com atributos deletados
console.log(carro)