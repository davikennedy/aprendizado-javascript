const primeiroElemento = string => string[0]
const primeiraLetra = string => string[0]
const letraMinuscula = letra => letra.toLowerCase()

new Promise(function(resolve) {
    resolve(['Ana', 'Bia', 'Carlos', 'Daniel'])
})
    .then(primeiroElemento) // Ana
    .then(primeiraLetra) // A
    .then(letraMinuscula) // a
    .then(console.log) // Imprime "a"