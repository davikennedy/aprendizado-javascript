function triangulo(lado1, lado2, lado3) {
    if (lado1 == lado2 && lado2 == lado3) {
        return 'Triângulo Equilátero - Os três lados são iguais.'
    } else if (lado1 == lado2 || lado1 == lado3 || lado2 == lado3) {
        return 'Triângulo Isósceles - Dois lados iguais.'
    } else {
        return 'Triângulo Escaleno - Todos os lados são diferentes'
    }
}

console.log(triangulo(2, 1, 1))