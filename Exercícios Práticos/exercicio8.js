/*
    Faça um programa para calcular a média de um aluno. Imprima a sua média e classificação

    Média = (nota 1 + nota 2 + nota 3) / 3;

    Classificação:
        - Média menor que 5, reprovação
        - Média entre 5 e 7, recuperação
        - Média acima de 7, aprovação
*/

const nota1 = 5;
const nota2 = 4;
const nota3 = 4;

const media = (nota1 + nota2 + nota3) / 3;

if (media < 5) {
    console.log(`Média: ${media.toFixed(2)}. Você está reprovado.`);
} else if (media >= 5 && media < 7) {
    console.log(`Média: ${media.toFixed(2)}. Você está de recuperação.`);
} else {
    console.log(`Média: ${media.toFixed(2)}. Você foi aprovado.`);
}