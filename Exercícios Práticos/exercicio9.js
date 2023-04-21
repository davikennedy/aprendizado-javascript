function escreverMeuNome(nome) {
    return (`Meu nome é ${nome}`);
}

function verificarMaioridade(idade) {
    if (idade >= 18) {
        return "Sou maior de idade";
    } else {
        return "Sou menor de idade"
    }
}

function main() {
    console.log(escreverMeuNome('Davi Kennedy'));
    console.log(verificarMaioridade(28));
}

main();