const notas = [6.7, 7.4, 9.8, 8.1, 7.7]

console.log('Percorrendo um \'array\'')
for (let i in notas) {
    console.log(`Índice ${i} = ${notas[i]}`)
}

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso: 64
}

console.log('\nPercorrendo um \'objeto\'')
for (let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}