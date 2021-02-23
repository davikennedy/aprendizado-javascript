const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

 // Desafio: Retornar mulher chinesa com o menor salário
const chineses = funcionario => funcionario.pais === 'China'
const mulheres = funcionario => funcionario.genero === 'F'
const menorSalario = ((funcionario, funcionarioAtual) => {
    return funcionario.salario < funcionarioAtual.salario ? funcionario : funcionarioAtual
})

axios.get(url).then(response => {
    const funcionarios = response.data
    const resultado = funcionarios
        .filter(chineses)
        .filter(mulheres)
        .reduce(menorSalario)

    console.log(funcionarios.filter(chineses).filter(mulheres).reduce(menorSalario))

})