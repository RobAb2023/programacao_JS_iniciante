const io = require('console-read-write')

const main = async() => {

    const num = Number(await io.ask("Digite um numero para o valculo da fatorial: "))

    let fat = 1
    for (let i = 1; i <= num; i++){
       fat = fat * i

    }
    io.write(`Fatorial de ${num}: ${fat}`)

}

main()

// 4! -> 4*3*2*1
// MULTIPLICACAO INICIA COM 1
// SOMA INICIA 0