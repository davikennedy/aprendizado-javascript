class Person {
    constructor(name) {
        this._name = name
    }

    get name() {
        return this._name
    }

    set name(newName) {
        this._name = newName
    }

}

const person = new Person('Davi Kennedy')

person.name = 'João Silva'

console.log(person.name)