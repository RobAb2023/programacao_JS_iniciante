const io = require('console-read-write')

const main = async() => {

    let dinheiro = Number(await io.ask('Digite uma quantidade de dinheiro sem virgula: '))

    io.write('Quantas notas de 100, 50, 20, 10, 5, 2 e 1 real? ')

    let nota = Math.floor(dinheiro/100)
    dinheiro = dinheiro % 100
    io.write(`Nota(s) de 100: ${nota}`)

    nota = Math.floor(dinheiro/50)
    dinheiro = dinheiro % 50
    io.write(`Nota(s) de 50 : ${nota}`)

    nota= Math.floor(dinheiro/20)
    dinheiro = dinheiro % 20
    io.write(`Nota(s) de 20 : ${nota}`)

    nota = Math.floor(dinheiro/10)
    dinheiro = dinheiro % 10
    io.write(`Nota(s) de 10 : ${nota}`)

    nota = Math.floor(dinheiro/5)
    dinheiro = dinheiro % 5
    io.write(`Nota(s) de 5 : ${nota}`)

    nota = Math.floor(dinheiro/2)
    dinheiro = dinheiro % 2
    io.write(`Nota(s) de 2: ${nota}`)

    nota= Math.floor(dinheiro/1)
    io.write(`Moeda(s) de 1: ${nota}`)


}

main()