const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;

rl.on('line', (line) => {
  input = line.split(' ');
  rl.close();
}).on('close', () => {
  const num = +input[0];
  console.log(num.toString(+input[1]).toUpperCase());

  process.exit();
});
