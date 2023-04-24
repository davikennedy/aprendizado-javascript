/*
    Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
    primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
    retornará o valor da aplicação sob o regime de juros compostos.
*/

function jurosSimples(capitalInicial, taxaJuros, tempoAplicacao) {
    return capitalInicial + (capitalInicial / 100 * taxaJuros * tempoAplicacao);
}

function jurosCompostos(capitalInicial, taxaJuros, tempoAplicacao) {
    let montante = 0;

    for (let i = 1; i <= tempoAplicacao; i++) {
        montante = capitalInicial + (capitalInicial / 100 * taxaJuros);
        capitalInicial = montante;
    }
    return montante.toFixed(2)
}

function main() {
    const capitalInicial = 100, taxaJuros = 5, tempoAplicacao = 6

    const calculaJurosSimples = jurosSimples(capitalInicial, taxaJuros, tempoAplicacao);
    const calculaJurosCompostos = jurosCompostos(capitalInicial, taxaJuros, tempoAplicacao);

    console.log("Juros Simples:", calculaJurosSimples);
    console.log("Juros Compostos:", calculaJurosCompostos);
}

main();