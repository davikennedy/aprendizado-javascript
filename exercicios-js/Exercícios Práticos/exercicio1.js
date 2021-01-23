function aritimeticos(num1, num2) {
    let mult = num1 * num2
    let divi = num1 / num2
    let subt = num1 - num2
    let soma = num1 + num2

    return `Multiplicação: ${mult} | Divisão: ${divi} | Subtração: ${subt} | Soma: ${soma}`
}

console.log(aritimeticos(10, 2))