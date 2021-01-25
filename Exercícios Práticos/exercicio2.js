/* 
    Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
    Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
    Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
    ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
    triângulo).
*/

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