/*
Para driblar o fato de que o 'this' pode variar, criamos aqui a const 'self', que recebe o valor de this
Outra forma de fazer isso é usando a função .bind
*/

function Pessoa() {
    this.idade = 0

    const self = this

    setInterval(function() {
        self.idade++
        console.log(self.idade)
    }/*.bind(this) */, 1000)
}

new Pessoa