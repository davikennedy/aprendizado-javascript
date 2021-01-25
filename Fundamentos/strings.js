const escola = "Cod3r"

console.log(escola.charAt(4))
console.log(escola.charAt(5))
console.log(escola.charCodeAt(3)) // Retorna o valor da tabela ASCII referente ao caracter
console.log(escola.indexOf('o')) // Verifica em que posição está o caracter informado

console.log(escola.substring(1)) // Retorna a string a partir do valor informado
console.log(escola.substring(1,3))

console.log('Escola '.concat(escola).concat("!"))
console.log('Escola ' + escola + ("!"))
console.log(escola.replace(3, 'e'))

console.log('Ana,Pedro,Aline'.split(','))