function divisao(dividendo, divisor) {
    let resultado = dividendo / divisor
    let resto = dividendo % divisor
    return `Resultado: ${resultado} | Resto: ${resto}`
}

console.log(divisao(25, 2))