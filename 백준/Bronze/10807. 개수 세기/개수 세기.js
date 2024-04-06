const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on('line', (line) => {
  input.length === 1
    ? input.push(line.split(' ').map((el) => +el))
    : input.push(+line);
}).on('close', () => {
  console.log(input[1].filter((el) => el === input[2]).length);
  process.exit();
});
