// Gera valores entre 1 e 100
function gerarNumeroAleatorio(min, max) {
    if (min > max) {
        [min, max] = [max, min]
    }

    return new Promise(resolve => {
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min
        resolve(aleatorio)
    })
}

gerarNumeroAleatorio(1, 100).then(console.log)