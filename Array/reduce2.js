const alunos = [
    {nome: 'João', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: true},
]

// Desafio 1: Todos os alunos são bolsistas?
const resultado1 = alunos.map(aluno => aluno.bolsista).reduce((acumulador, valorAtual) => acumulador && valorAtual)
console.log(resultado1)

// Desafio 2: Algum aluno é bolsista?
const resultado2 = alunos.map(aluno => aluno.bolsista).reduce((acumulador, valorAtual) => acumulador || valorAtual)
console.log(resultado2)

// Desafio 3: Quantos alunos são bolsistas?
const resultado3 = alunos.filter(aluno => aluno.bolsista).length
console.log(resultado3)