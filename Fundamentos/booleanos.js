let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo)

// Basicamente, havendo uma dupla negação teremos um resultado *true*
console.log('Os verdadeiros:')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

// Basicamente, havendo uma dupla negação teremos um resultado *true*
console.log('Os falsos:')
console.log(!!0)
console.log(!!'') // Pode ser usado para testar se o campo nome foi preenchido, por exemplo
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('Para finalizar:')
console.log(!!('' || null || 0 || ' '))

let nome = 'Lucas'
console.log(nome || 'Desconhecido')