// Retorna o tamanho de uma string
const textSize = 'Texto'.length
console.log(`Quantidade de letras: ${textSize}`)

// Retorna um array quebrando a string por um delimitador
const splittedText = 'Texto'.split('')
console.log('Array com as posições separadas pelo delimitador \'\':', splittedText)

// Busca por um valor e substitui por outro
const replacedText = 'Texto'.replace('Texto', 'otxeT')
console.log('Substituição de valor:', replacedText)

// Retorna a "fatia" de um valor
const lastChar = 'Texto'.slice(-1)
console.log('Última letra da string:', lastChar)

const allWithoutLastChar = 'Texto'.slice(0, -1)
console.log('Valor da string excluindo o último caractere:', allWithoutLastChar)

const secondToEnd = 'Texto'.slice(1)
console.log('Valor da string a partir do 2º caractere:', secondToEnd)

// Retorna N caracteres a partir de uma posição
const nCaracteres = 'Texto'.substring(0, 2)
console.log('Os dois primeiros caracteres são:', nCaracteres)

// Verifica em que posição está o caracter informado
const whereIs = "Texto".indexOf('o')
console.log('O caractere informado está na posição:', whereIs) 

// Concatena strings
const texto1 = 'Esse é o texto 1'
const texto2 = ' e '
const texto3 = 'Esse é o texto 3'
console.log(texto1.concat(texto2).concat(texto3) + "!")