function primeiroElemento(array) {
    return array[0]
}

function primeiraLetra(string) {
    return string[0]
}

function letraMinuscula(string) {
    return string.toLowerCase()
}

new Promise(function(cumprirPromessa) {
    cumprirPromessa(['Ana', 'Bia', 'Carlos', 'Daniel'])
})
    .then(primeiroElemento) // Ana
    .then(primeiraLetra) // A
    .then(letraMinuscula) // a
    .then(console.log) // Imprime "a"