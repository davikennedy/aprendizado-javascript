function Pessoa(nome) {
    this.nome = nome

    this.falar = () => {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('Davi Kennedy')
p1.falar()