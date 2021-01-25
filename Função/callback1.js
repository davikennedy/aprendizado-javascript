/*
O foreach serve para percorrer um arraywww
O foreach espera receber o valor alocado na posição e opcionalmente, o índice
*/

const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice) {
    console.log(`${indice+ 1}. ${nome}`)
}

fabricantes.forEach(imprimir)
fabricantes.forEach(fabricante => console.log(fabricante))