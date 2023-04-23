/*
    Desafio: Crie uma função que retorne o dia da semana com base na data atual
*/

function diaDaSemana() {
    const dataAtual = new Date();
    const diasDaSemana = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
    const dia = diasDaSemana[dataAtual.getDay()];

    return dia;
};

console.log(`Hoje é ${diaDaSemana()}.`)