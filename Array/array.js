let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3]) // Retorna undefined, pois esse índice não existe

aprovados[3] = 'Paulo' // Mais utilizado para fazer substituição de valor
aprovados.push('Maria Fernanda') // Adiciona um novo elemento na última posição do array
console.log(aprovados[3])
console.log(aprovados.length) // Imprime o tamanho do array

console.log(aprovados)
aprovados.sort() // Altera a ordenação dos elementos do array
console.log(aprovados)

delete aprovados[1] // Elimina o elemento da posição informada e atribui 'undefined'. O 'delete' não reordena o array
console.log(aprovados[1])
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 2, 'Elemento1', 'Elemento2') // Elimina 2 elementos iniciando pelo índice 1. Após isso, adiciona os elementos informados. Caso não deseja eliminar algum elemento, bastaria informar '0' no segundo parâmetro
console.log(aprovados)