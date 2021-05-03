class Calculator {
    static sum(...numbers) {
        return numbers.reduce((n1, n2) => (n1 + n2))
    }
}

console.log(Calculator.sum(1, 2, 5, 7))