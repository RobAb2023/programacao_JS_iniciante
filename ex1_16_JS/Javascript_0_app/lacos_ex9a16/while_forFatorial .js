const io = require('console-read-write')

const getNum = async() => {
    return Number(await io.ask("Digite um numero para o Calculo da fatorial: "))
}

const main = async() => {
    let num
    while ( 
        num = await getNum(),
        num >= 0
) 

    {
        let fat =1
    for (let i = 1; i <= num; i++){
        fat = fat * i
    }

    io.write(`Fatorial de ${num}: ${fat}`)

}
io.write(`Fatorial de ${num}: não existe`)


}

main()

//porque o fatorial positivo vira um loop e o negativo não?
