/*
    Faça um programa para calcular a média de um aluno. Imprima a sua média e classificação

    Média = (nota 1 + nota 2 + nota 3) / 3;

    Classificação:
        - Média menor que 5, reprovação
        - Média entre 5 e 7, recuperação
        - Média acima de 7, aprovação
*/

function calcularMedia(nota1, nota2, nota3) {
    return (nota1 + nota2 + nota3) / 3;
}

function obterClassificacao(media) {
    if (media < 5) {
        return (`Média: ${media.toFixed(2)}. Você está reprovado.`);
    } else if (media >= 5 && media < 7) {
        return (`Média: ${media.toFixed(2)}. Você está de recuperação.`);
    } else {
        return (`Média: ${media.toFixed(2)}. Você foi aprovado.`);
    }
}

function main() {
    let nota1 = 5;
    let nota2 = 9;
    let nota3 = 8;

    let media = calcularMedia(nota1, nota2, nota3);
    console.log(obterClassificacao(media));
}

main();