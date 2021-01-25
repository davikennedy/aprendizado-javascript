let contador = 1

console.log('Incremento com \'while\'')
while (contador <= 10) {
    console.log('Contador = ', contador)
    contador++
}

console.log('\nIncremento com \'for\'')
for (let i = 1; i <= 10; i++) { 
    console.log(`Contador = ${i}`)
}

console.log('\nPercorrendo um array com \'for\'')
const notas = [6.7, 7.4, 9.8, 8.1, 7.7]
for (let i = 0; i < notas.length; i++) {
    console.log(`Nota = ${notas[i]}`)
}