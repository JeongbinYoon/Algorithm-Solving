const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', (line) => {
  input = line.split(' ');
  rl.close();
}).on('close', () => {
  console.log(input.map((el, idx) => [1, 1, 2, 2, 2, 8][idx] - el).join(' '));
  process.exit();
});
