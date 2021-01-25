const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log('Testando a utilização de \'break\'')
for (let x in nums) {
    if (x == 5) {
        break
    }
    console.log(`Índice ${x} = ${nums[x]}`)
}

console.log('\nTestando a utilização de \'continue\'')
for (let x in nums) {
    if (x == 5) {
        continue
    }
    console.log(`Índice ${x} = ${nums[x]}`)
}

console.log('\nTestando a utilização de rótulos')
externo: for (let a in nums) {
    for (b in nums) {
        if (a == 2 && b == 3) break externo
        console.log(`Par = ${a}, ${b}`)
    }
}