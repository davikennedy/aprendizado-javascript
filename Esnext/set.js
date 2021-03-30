// Não aceita repetição / Não é indexada
const times = new Set()
times.add('Flamengo')
times.add('Internacional').add('Palmeiras').add('Vasco')
times.add('Grêmio')
times.add('Flamengo')

console.log(times)
console.log(times.size)
console.log(times.has('flamengo')) // Retorna 'false'
console.log(times.has('Flamengo')) // Retorna 'true'
times.delete('Flamengo')
console.log(times.has('Flamengo'))

const nomes = ['Késia', 'Davi', 'Maria Fernanda', 'Maria Isabela', 'Maria Fernanda']
const nomesSet = new Set(nomes)
console.log(nomesSet)