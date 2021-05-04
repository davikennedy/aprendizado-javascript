class Veiculo {
    constructor(rodas) {
        this.rodas = rodas
    }

    acelerar() {
        console.log('Acelerou!!!')
    }
}

class Moto extends Veiculo {
    constructor(rodas, capacete) {
        super(rodas)
        this.capacete = capacete
    }

    empinar() {
        console.log(`Empinou com ${this.rodas} rodas!!!`)
    }

    estaUsandoCapacete() {
        console.log(this.capacete)
    }
}

const bross = new Moto(2, true)
bross.empinar()
bross.estaUsandoCapacete()