const nums = [1, 2, 3, 4, 5]

// O método 'map' serve para gerar um array modificado a partir do array original
let resultado = nums.map(function(e) {
    return e * 2
})

console.log(resultado)