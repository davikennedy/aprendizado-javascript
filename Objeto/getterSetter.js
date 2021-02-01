const sequencia = {
    _valor: 1, // Convenção que indica que essa variável deverá ser acessada apenas internamente
    get valor() {return this._valor++},
    set valor(valor) {
        if (valor > this._valor) {
            this._valor = valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900 // Essa atribuição será ignorada, por conta da validação do método 'set valor(valor)'
console.log(sequencia.valor, sequencia.valor)