// Esses itens são funções
console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)


// Função para reverter uma String
String.prototype.reverse = function() {
    // 'split' transforma a string em um array, 'reverse' reverte o array, 'join' junta os elementos do array em uma string
    return this.split('').reverse().join('')
}
nome = 'Davi Kennedy'
console.log(nome.reverse())


// Função para retornar o primeiro elemento de um array
Array.prototype.first = function() {
    return this[0]
}
newArray = [1, 2, 3, 4, 5]
console.log(newArray.first())