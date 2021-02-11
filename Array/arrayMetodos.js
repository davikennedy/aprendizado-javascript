const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // Remove o último elemento do array
console.log(pilotos)

pilotos.push('Verstappen') // Adiciona o novo elemento na última posição
console.log(pilotos)

pilotos.shift() // Remove o primeiro elemento do array
console.log(pilotos)

pilotos.unshift('Hamilton') // Adiciona o novo elemento na primeira posição do array
console.log(pilotos)

// 'splice' pode adicionar e remover elementos
pilotos.splice(2, 0, 'Bottas', 'Massa') // Adiciona 'Bottas' e 'Massa' antes da posição 2 e não realiza nenhuma remoção
console.log(pilotos)
pilotos.splice(1, 2) // Remove 2 elementos inciciando pelo elemento 1
console.log(pilotos)

pilotos.push('Ocon', 'Tsunoda') // Adiciona os novos elementos a partir da última posição
console.log(pilotos) 

const algunsPilotos = pilotos.slice(1) // Retorna um novo array a partir do elemento 1
console.log(algunsPilotos)
const algunsPilotos1 = pilotos.slice(1,4) // Retorna um novo array, após eliminar elementos contando do 1 até o 4, sem incluir o 4
console.log(algunsPilotos1)