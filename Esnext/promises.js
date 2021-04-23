function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (frase.length <= 10) {         
                resolve(frase += " - Deu certo =)")
            } else {                
                reject(frase += " - Deu ruim =(")
            }        
        }, segundos * 1000)
    })
}

falarDepoisDe(3, "Vamos ver isso aqui")
    .then(frase => console.log(frase))
    .catch(e => console.log(e))