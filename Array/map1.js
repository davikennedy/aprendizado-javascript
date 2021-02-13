const nums = [1, 2, 3, 4, 5]

// O método 'map' serve para gerar um array modificado a partir do array original
let resultado = nums.map(function(e) {
    return e * 2
})

console.log(resultado)

// Algumas possibilidades com 'map'
const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

// Fazendo encadeamento de 'map'
resultado = nums.map(soma10).map(triplo).map(paraDinheiro)



console.log(resultado)