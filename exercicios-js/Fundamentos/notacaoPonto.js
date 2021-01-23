console.log(Math.ceil(6.1))

const obj1 = {}
obj1.nome = 'Bola'
//obj1['nome'] = 'Bola2'
console.log(obj1.nome)

function Obj(nome) {
    this.nome = nome
    this.exec = function() {
        console.log('Exec...')
    }
}
const obj2 = new Obj('Pedra')
const obj3 = new Obj('Estilingue')

console.log('Objeto 2 =', obj2.nome)
console.log('Objeto 3 =', obj3.nome)
obj2.exec()