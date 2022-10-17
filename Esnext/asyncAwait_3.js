// Aprendendo tratativa de erros com Async/Await

function gerarNumeroAleatorio(min, max, numerosProibidos) {
    if (min > max) {
        [min, max] = [max, min]
    }

    return new Promise((resolve, reject) => {
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min
        
        if(numerosProibidos.includes(aleatorio)) {
            reject('Número repetido!')
        } else {
            resolve(aleatorio)
        }
        
    })
}

async function gerarMegaSena(qtdNumeros, tentativas = 1) {
    try {
        const numeros = []
        for (let _ of Array(qtdNumeros).fill()) {
            numeros.push(await gerarNumeroAleatorio(1, 60, numeros))
        }
        return numeros
    } catch(e) {
        if(tentativas > 10) {
            throw 'Não deu certo!'
        } else {
            return gerarMegaSena(qtdNumeros, tentativas + 1)
        }
    }
}

gerarMegaSena(15)
    .then(console.log)
    .catch(console.log)

/*
let arrayTeste = [1, 2, 4]
gerarNumeroAleatorio(1, 5, arrayTeste)
    .then(console.log)
    .catch(console.log)
*/