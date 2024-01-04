const io = require('console-read-write')

// fibonacci => 0 = 0 (0 + 0)
//fibonacci => 1 = 1 (0 + 1)
//fibonacci => 2 = 1 (0 + 1)
//fibonacci => 3 = 2 (1 + 1)
//fibonacci => 4 = 3 (2 + 1)
//fibonacci => 5 = 8 (3 + 5)
//fibonacci => 6 = 13 (5 + 8)
//fibonacci => 7 = 21 (8 + 13)

// 0 1 2 3 4 5 6 7  
// 0 1 1 2 3 5 8 13 21


const main = async() => {
    const num = Number(await io.ask("Digite um numero para o Fibonacci "))
    
    let soma = 0
    let anterior = 0
    let proximo = 1
    for (i = 0; i < num; i++){
        soma = anterior + proximo
        anterior = proximo
        proximo = soma
    }

    io.write(`Fibonacci de ${num}: ${anterior}`)


}

main()