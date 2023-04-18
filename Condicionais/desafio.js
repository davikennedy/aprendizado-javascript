/*
    Faça um programa para calcular o valor de uma viagem.

    Você terá 5 variávies, sendo elas:
        1 - Preço do etanol
        2 - Preço do gasolina
        3 - Tipo de combustível que está no carro
        4 - Consumo de combustível do carro por KM
        5 - Distância em KM da viagem

    Imprima no console o valor que será gasto de combustível para realizar esta viagem
*/

const precoEtanol = 5.79;
const precoGasolina = 3.25;
let tipoCombustivel = "x";
const consumoPorLitro = 15;
const distanciaEmKM = 100;

tipoCombustivel = "etanol";

if (tipoCombustivel === "etanol") {
    let totalViagem = distanciaEmKM / consumoPorLitro * precoEtanol;
    console.log(totalViagem.toFixed(2));
} else {
    let totalViagem = distanciaEmKM / consumoPorLitro * precoGasolina;
    console.log(totalViagem.toFixed(2));
}


