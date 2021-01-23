function compras(trabalho1, trabalho2) {
    const tomarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    // const comprarTv32 = !!(trabalho1 ^ trabalho2) - bitwise xor
    const comprarTv32 = trabalho1 != trabalho2
    const manterSaudavel = !tomarSorvete

    /*
    Estou retornando um objeto sem usar chave:valor, 
    pois o JavaScript subentende que o nome da chave é o próprio nome da variável 
    */
    return {tomarSorvete, comprarTv50, comprarTv32, manterSaudavel}
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))
