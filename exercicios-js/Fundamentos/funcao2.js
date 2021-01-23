// Armazenando uma função em uma variável ou constante
const imprimirSoma = function (a, b) {
    console.log(a + b)
}
imprimirSoma(2, 3)

// Armazenando uma função arrow em uma variável
const somar = (a, b) => {
    return a + b
}
console.log(somar(2, 3))

// Retorno Implícito
const subtrair = (a, b) => a - b
console.log(subtrair(5, 3))