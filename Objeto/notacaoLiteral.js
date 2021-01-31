const a = 1
const b = 2
const c = 3

// Maneira antiga
const obj1 = {a: a, b: b, c: c}

// Notação Literal: Dessa forma, o nome da constante se torna o próprio nome do atributo
const obj2 = {a, b, c}

console.log(obj1, obj2)



const nomeAtributo = 'nota'
const valorAtributo = 7.87

// Maneira antiga
const obj3 = {}
obj3[nomeAtributo] = valorAtributo

// Notação Literal
const obj4 = {[nomeAtributo]: valorAtributo}
console.log(obj3, obj4)



// Definindo funções em objetos
const obj5 = {
    // Maneira antiga
    funcao1: function() {
        // ...
    },
    // Notação Literal
    funcao2() {
        // ...
    }
}

console.log(obj5)