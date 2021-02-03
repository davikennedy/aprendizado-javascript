function Aula(nome, videoID) {
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new Aula('Bem vindo!', 123)
const aula2 = new Aula('Até breve!', 456)
console.log(aula1, aula2)


// Simulando o 'new'
function myNew (f, ...params) {
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, params)
    return obj
}

const aula3 = myNew(Aula, 'Bem vindo!', 123)
const aula4 = myNew(Aula, 'Até breve!', 456)
console.log(aula3, aula4)