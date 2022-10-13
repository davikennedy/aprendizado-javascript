// Trabalhando com tratamento de erros em promises
function funcionarOuNao(valor, chanceErro) {
    return new Promise((resolve, reject) => {
        try {
            if (Math.random() < chanceErro) {
                reject('Ocorreu um erro!')
            } else {
                resolve(valor)
            }
        } catch(erro) {
            reject(erro)
        }
    })
}

funcionarOuNao('Teste validado!', 0.5)
    .then(valor => console.log(`Valor: ${valor}`))
    .catch(erro => console.log(`Erro: ${erro}`))