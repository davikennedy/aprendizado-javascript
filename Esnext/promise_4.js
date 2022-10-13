// Como chamar o .then, depois que todas as promessas foram cumpridas
function gerarNumeroAleatorio(min, max, tempo) {
    if (min > max) {
        [min, max] = [max, min]
    }

    return new Promise(resolve => {
        setTimeout(() => {
            const fator = max - min + 1
            const aleatorio = parseInt(Math.random() * fator) + min
            resolve(aleatorio)
        }, tempo)
    })
}

function gerarVariosNumeros() {
    return Promise.all([
        gerarNumeroAleatorio(1, 60, 4000),
        gerarNumeroAleatorio(1, 60, 1000),
        gerarNumeroAleatorio(1, 60, 500),
        gerarNumeroAleatorio(1, 60, 3000),
        gerarNumeroAleatorio(1, 60, 100),
        gerarNumeroAleatorio(1, 60, 2500),
        gerarNumeroAleatorio(1, 60, 1500)
    ])
}

gerarVariosNumeros().then(console.log)