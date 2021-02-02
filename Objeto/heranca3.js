const pai = {nome: 'Pedro', corCabelo: 'preta'}

// Usando Object.create(prototipo) é possível definir o protótipo do objeto, no momento da criação
const filha1 = Object.create(pai)
filha1.nome = 'Ana'
console.log(filha1.corCabelo)

const filha2 = Object.create(pai, {
    nome: {value: 'Maria Fernanda', writable: false, enumerable: true}
})
console.log(filha2.nome)
filha2.nome = 'Carla' // Essa atribuição não será realizada, pois o atributo 'writable' foi definido como 'false'
console.log(`${filha2.nome} tem cabelo de cor ${filha2.corCabelo}`)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

// A função hasOwnProperty(key) permite saber se algum atributo (key) pertence ao objeto ou se foi herdada
for (let key in filha2) {
    filha2.hasOwnProperty(key) ?
        console.log(key) : console.log(`Por herança: ${key}`)
}