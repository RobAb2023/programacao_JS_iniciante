
//for( let i = 0; i <= 5; i =i+1){
 //  process.stdout.write(`${i}`)

//}
//console.log('fim')

let i = 0;
while (i <= 5) {
  process.stdout.write(`${i}`);
  i++;
}
console.log();
console.log("fim");


//for (let i = 0; i <= 5; i++) {
 // for (let j = 0; j <= 5; j++) {
 //   process.stdout.write(`(${i},${j})`)
 // }
 // console.log()
//}
//console.log()
//console.log('fim')

let a = 0;
let b = 0;

while (a < 5) {
  while (b < 5) {
    process.stdout.write(`(${a},${b})`);
    b++;
  }
  console.log();
  a++;
}
console.log();
console.log("fim");