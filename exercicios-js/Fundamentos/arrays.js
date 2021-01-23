const valores = [7.7, 8.9, 6.3, 9.2, 'arroz']
console.log(valores[0], valores[4])

valores[5] = 'beterraba'
console.log(valores)
console.log(valores.length)

// Inserindo valor no array após o último valor preenchido 
valores[valores.length++] = 'repolho'
console.log(valores)

// Função push serve para inserir valores no array
valores.push({id: 3}, false, null)
console.log(valores)

// Retira o último valor do array e retorna o mesmo
console.log(valores.pop())

// Remove um item do array, conforme especificado
delete valores[4]
console.log(valores)

// Array é do tipo *object*
console.log(typeof valores)