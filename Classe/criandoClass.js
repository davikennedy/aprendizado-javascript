class Car {
    constructor(brand, price = 10) {
        this.brand = brand
        this.price = price
    }

    run() {
        console.log('Correr')
    }
}

const civic = new Car('Honda', 130)
civic.run() // Correr

const hb20 = new Car('Hyundai')
console.log(hb20.price) // 10