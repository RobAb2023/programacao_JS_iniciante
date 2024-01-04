
/**
 * Crie uma aplicação para entrada de 4 notas
 * 
 * As notas 1 e 2 devem ser maiores ou iguais a 0 e menores ou iguais a 20
 * Se as notas 1 e 2 nao estiverem dentro da regra anterior, avise e saia do programa
 * 
 * As notas 3 e 4 devem ser maiores ou iguais a 0 e menores ou iguais a 30
 * Se as notas 3 e 4 nao estiverem dentro da regra anterior, avise e saia do programa
 * 
 * Junte as 4 notas e tire a media
 * 
 * Se a media for maior ou igual a 60% escreva que o aluno foi aprovado
 * e o valor da media com 2 casas de precisao decimal
 * Ex: "Aluno aprovado com media: 15.00" 
 * 
 * 
 * Se a media for maior ou igual a 30% ou for menor que 6 escreva que o aluno esta em recuperação
 * e o valor da media com 2 casas de precisao decimal
 * Ex: "Aluno em recuperação com media: 10.50" 
 * 
 * 
 * Se a media for menor que 30% escreva que o aluno foi reprovado
 * e o valor da media com 2 casas de precisao decimal
 * Ex: "Aluno reprovado com media: 6.00" 
 * 
 * Caso de teste:
 * 12, 12,  18, 18
 * 12, 12, 18, 0
 * 12, 12, 0, 0
 * 11.36, 12.66, 18.11, 17.98
 * 
 * 
 */


const io = require('console-read-write')

const main = async () => {
    io.write(`Notas 1 e 2 devem ser maiores ou iguais a 0 e menores ou iguais a 20`)


    const valor1 = Number(await io.ask(`Digite a nota1: `))

    const valor2 = Number(await io.ask(`Digite a nota2: `))

    if ((valor1 >= 0 && 0 >= valor2 ) || (valor2 <= 20 && 20 <= valor1)){
        io.write(`Notas 1 e 2 devem ser entre 0 e 20`)
        process.exit(0)
        
     }

    io.write(`Notas 1 e 2 devem ser maiores ou iguais a 0 e menores ou iguais a 30`)

    const valor3 = Number(await io.ask(`Digite a nota3: `))

    const valor4 = Number(await io.ask(`Digite a nota4: `))


   if ((valor3 >= 0 && 0 >= valor4 ) || (valor3 <= 30 && 30 <= valor4)){ 
        io.write(`Notas 3 e 4 devem ser entre 0 e 30`)
        process.exit(0)
    }


    const media =(valor1 + valor2 + valor3 + valor4)/4
    const perc60 = 25 * 0.6
    const perc30 = 25 * 0.3


    if (media >= perc60){
        io.write(`Aluno aprovado com media ${media.toFixed(2)}`)      

    }else if (media >= perc30 && media < perc60){
        io.write(`Aluno em recuperação com media ${media.toFixed(2)}`)

    }else{
        io.write(`Aluno em reprovado com media ${media.toFixed(2)}`)

    }

}

main()