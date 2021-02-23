require('./global')
console.log(MinhaAplicacao.saudacao())

MinhaAplicacao.nome = 'Eita!' // Essa atribuição não será realizada, porque o objeto está definido como 'freeze'
console.log(MinhaAplicacao.nome)