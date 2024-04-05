const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on('line', (line) => {
  input.length > 1
    ? input.push(line.split(' ').map((el) => +el))
    : input.push(+line);
}).on('close', () => {
  const list = input.slice(2);
  const sum = list.reduce((acc, cur) => (acc += cur[0] * cur[1]), 0);

  if (input[0] !== sum || input[1] !== list.length) console.log('No');
  else console.log('Yes');
  process.exit();
});
