const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  input.slice(1).forEach((str) => console.log(str[0] + str[str.length - 1]));
  process.exit();
});
