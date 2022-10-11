function gerarNumeroAleatorio(min, max) {
    if (min > max) {
        let x = min
        min = max
        max = x
    }

    return new Promise(resolve => {
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min
        resolve(aleatorio)
    })
}

gerarNumeroAleatorio(1, 60).then(console.log)