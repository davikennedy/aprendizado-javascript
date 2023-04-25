/*
    Desafio: Crie uma função que retorne o dia da semana com base na data atual
*/

const DIAS_DA_SEMANA = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];

function diaDaSemana() {
    const dataAtual = new Date();
    const dia = DIAS_DA_SEMANA[dataAtual.getDay()];

    if (!dia) {
        throw new Error("Não foi possível determinar o dia da semana.");
    }

    return dia;
};

function main() {
    try {
        console.log(`Hoje é ${diaDaSemana()}`);
    } catch (error) {
        console.error(error.message);
    }
}

main();