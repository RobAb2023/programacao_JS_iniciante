const io = require("console-read-write");

const fatorial = async () => {
  const num = Number(
    await io.ask("Digite um numero inteiro para calcular o fatorial: ")
  );

  let fat = 1;
  for (let i = 1; i <= num; i++) {
    fat = fat * i;
  }
  io.write(`Fatorial de ${num}: ${fat}`);
};

const fibonacci = async () => {
  const num = Number(await io.ask("Digite um numero para o Fibonacci : "));

  let soma = 0;
  let anterior = 0;
  let proximo = 1;
  for (i = 0; i < num; i++) {
    soma = anterior + proximo;
    anterior = proximo;
    proximo = soma;
  }

  io.write(`Fibonacci de ${num}: ${anterior}`);
};

const main = async () => {
  while (true) {
    console.log("\n=====================================");
    console.log("Escolha...\n");
    console.log("1 para FATORIAL");
    console.log("2 para FIBONNACCI");
    console.log("0 para SAIR\n");

    const escolha = await io.ask('Digite aqui: ')

    switch (escolha) {
      case "0":
        console.log("\nEscolheu sair do programa\n");
        process.exit(0);
      case "1":
        await fatorial();
        break;
      case "2":
        await fibonacci();
        break;
      default:
        console.log("Digite 0");
    }
  }
};

main();

//escolha usando if
//  if (escolha === '0'){
//      console.log('\n Escolheu sair do programa\n')
//    process.exit(0)
// }else{
//    console.log('Digite 0')
//}
