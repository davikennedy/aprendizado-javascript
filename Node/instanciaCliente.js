const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

const contadorC = require('./instanciaNova')()
const contadorD = require('./instanciaNova')()

contadorA.inc()
contadorA.inc()
console.log(`Contador A: ${contadorA.valor}, Contador B: ${contadorB.valor}`) // Imprime 3

contadorC.inc()
contadorC.inc()
console.log(`Contador C: ${contadorC.valor}, Contador D: ${contadorD.valor}`)