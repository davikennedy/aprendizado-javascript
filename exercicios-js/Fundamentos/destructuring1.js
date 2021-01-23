// novo recurso do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

/* 
Maneiras de ler: 
    Retire da estrutura 'pessoa' os atributos nome e idade 
    Extraia do objeto 'pessoa' os atributos nome e idade
*/
const {nome, idade} = pessoa
console.log(nome, idade)

const {nome: n, idade: i} = pessoa
console.log(n, i)

const {sobrenome, bemHumorada = true} = pessoa
console.log(sobrenome, bemHumorada)

const {endereco: {logradouro, numero, cep}} = pessoa
console.log(logradouro, numero, cep)

/* 
Esse trecho do código vai ocasionar erro, 
porque o atributo 'conta' não existe 
*/
const {conta: {ag, num}} = pessoa