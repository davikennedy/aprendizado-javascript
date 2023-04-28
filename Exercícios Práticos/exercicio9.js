const escreverMeuNome = (nome = '') => `Meu nome é ${nome}`;

const verificarMaioridade = (idade = 0) => {
    if (typeof idade !== 'number') {
        throw new Error('Idade deve ser um número');
    }

    return idade < 18 ? 'Sou menor de idade' : 'Sou maior de idade';
}

class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    apresentacao() {
        console.log(escreverMeuNome(this.nome));
        console.log(verificarMaioridade(this.idade));
    }
}

const pessoa = new Pessoa('Davi Kennedy', 28);
pessoa.apresentacao();