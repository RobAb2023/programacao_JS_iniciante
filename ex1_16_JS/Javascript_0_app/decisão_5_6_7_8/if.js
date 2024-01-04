
const io = require('console-read-write')

const main = async () => {

    const nivelPadrao = 10

    const valor = Number(await io.ask(`Digite um valor de nível entre 1 e 20: `))

    if (valor > nivelPadrao){

    io.write(`valor é maior que o nível padrão`)

    
    }

}

main()