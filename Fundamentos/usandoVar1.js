// O escopo de uma variável do tipo 'var' corresponde a todo o código
{
    {
        {
            {
                var sera = 'Será???'
                console.log(sera)
            }     
        }
    }
}
console.log(sera)

function teste() {
    var local = 123
    console.log(local)
}
teste()
console.log(local) // Essa linha gera erro porque a variável local só existe dentro do escopo da função teste()