const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa)) // Imprime as chaves do objeto
console.log(Object.values(pessoa)) // Imprime os valores do objeto
console.log(Object.entries(pessoa)) 

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false,
    value: '01/01/2019'
})

pessoa.dataNascimento = '01/01/2017' // Essa atribuição será ignorada, por conta da definição de 'writable: false'
console.log(pessoa.dataNascimento)

// Object.assign (ECMAScript 2015)
const destino = {a: 1} // Esse objeto irá receber as chaves e valores dos outros objetos
const o1 = {b: 2}
const o2 = {c: 3, a: 4}
const obj = Object.assign(destino, o1, o2)
console.log(obj)