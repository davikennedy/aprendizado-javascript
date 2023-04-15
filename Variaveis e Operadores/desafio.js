/*
    Faça um programa para calcular o valor de uma viagem.

    Você terá 3 variávies, sendo elas:
        1 - Preço do combustível
        2 - Consumo de combustível do carro por KM
        3 - Distância em KM da viagem

    Imprima no console o valor que será gasto de combustível para realizar esta viagem
*/

let precoCombustivel, gastoPorKm, distancia;

precoCombustivel = 5.72;
consumoPorLitro = 15;
distanciaEmKM = 45.7;

let totalViagem = distanciaEmKM / consumoPorLitro * precoCombustivel;

console.log(totalViagem.toFixed(2));