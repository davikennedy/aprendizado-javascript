const fs = require('fs')
const caminho = __dirname + '/arquivo.json'

// Síncrono...
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

// Assíncrono...
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})

// Maneira mais simples para lidar com arquivos .json
const config = require('./arquivo.json')
console.log(config.db)

// Leitura de um diretório
fs.readdir(__dirname, (err, arquivos) => {
    console.log('Conteúdo da pasta...')
    console.log(arquivos)
})