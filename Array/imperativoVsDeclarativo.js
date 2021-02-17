const alunos = [
    {nome: 'João', nota: 7.9},
    {nome: 'Maria', nota: 9.2},
    {nome: 'Késia', nota: 10.0}
]

// Imperativo: Foca em como será feito
let total1 = 0
for (let i = 0; i < alunos.length; i++) {
    total1 += alunos[i].nota
}
console.log((total1 / alunos.length).toFixed(2))

// Declarativo: Foca no que deve ser feito
const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual
const total2 = alunos.map(getNota).reduce(soma)
console.log((total2 / alunos.length).toFixed(2))