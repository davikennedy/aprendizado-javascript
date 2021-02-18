const peso1 = 1.0
const peso2 = Number('2.0') // Transforma string em Number

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media)
console.log(media.toFixed(2)) // Imprime com duas casas decimais
console.log(media.toString(2)) // Imprime em binário

console.log(typeof media)
console.log(typeof Number)


const meuNumero = 12.4032

// Transformar número em string
const numeroParaString = meuNumero.toString()
console.log('Número transformado em string:', typeof numeroParaString)

// Retorna número com casas decimais
const numComCasasDecimais = meuNumero.toFixed(2)
console.log('Número com duas casas decimais:', numComCasasDecimais)

// Transforma uma string em float
console.log('String convertida em float:', parseFloat('13.22'))

// Transforma uma string em int
console.log('String convertida em int:', parseInt('11.06'))