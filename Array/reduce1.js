/* 
    O método 'reduce' serve para realizar operações entre as posições de um array
    Após isso, retorna um valor único
*/
const alunos = [
    {nome: 'João', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: true},
]

// Essa operação extrai as notas dos alunos e depois realiza o somatório entre elas
const resultado = alunos.map(a => a.nota).reduce((acumulador, valorAtual) => acumulador + valorAtual)

// Imprime o somatório de todas as notas
console.log(resultado)