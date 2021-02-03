// Transformando um objeto em um JSON. Obs.: JSON.stringify(obj) não retorna as funções do objeto 
const obj = {a: 1, b: 2, c: 3, soma() {return a + b + c}}
console.log(JSON.stringify(obj))


// Transformando um JSON em um objeto
console.log(JSON.parse('{"a": 1, "b": 2, "c":3 }'))