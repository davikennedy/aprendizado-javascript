const aprovados =  ['Júnior', 'Iago', 'João Guilherme', 'Miguel', 'Késia', 'Fernanda']

aprovados.forEach(function(nome, indice){
    console.log(`${indice + 1}) ${nome}`)
})

aprovados.forEach(nome => console.log(nome)) // Desconsidera os índices e imprime apenas os valores do array

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)