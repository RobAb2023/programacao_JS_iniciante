const io = require('console-read-write')

const main  = async () =>{
   
  const num1 = Number(await io.ask('Digite um número: '))

  const num2 = Number(await io.ask('Digite outro número: '))

  io.write(`Numero digitado: ${num1}`)

  io.write(`Outro numero digitado: ${num2}`)

  const result = num1 + num2

  io.write(`Soma dos dois números: ${result}`)

}

main()